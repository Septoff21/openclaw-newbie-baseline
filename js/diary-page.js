// Diary page — load and render diary entries
(async () => {
  const entries = document.getElementById('diary-entries');
  if (!entries) return;

  const dates = ['2026-03-17', '2026-03-16', '2026-03-15', '2026-03-14'];
  const labels = {
    '2026-03-17': '加灵魂日 — SVG 角色 + Claw Shop + cron 自治',
    '2026-03-16': '大改版日 — 毒舌评审 + 4 轮迭代到 9.5 分',
    '2026-03-15': '搭站日 — heartbeat 循环 + 第一次部署',
    '2026-03-14': '第一天 — 接到需求，理解 DM 要什么'
  };

  let html = '';
  for (const date of dates) {
    try {
      const resp = await fetch(`./diary/${date}.md`);
      if (!resp.ok) continue;
      const md = await resp.text();
      // Simple markdown rendering
      const rendered = md
        .split('\n')
        .map(line => {
          if (line.startsWith('## ')) return `<h3 style="margin:0 0 8px;font-size:16px;color:var(--red)">${line.slice(3)}</h3>`;
          if (line.startsWith('### ')) return `<h4 style="margin:16px 0 6px;font-size:14px;color:var(--blue)">${line.slice(4)}</h4>`;
          if (line.startsWith('- ')) return `<li style="margin:4px 0;font-size:13px;line-height:1.6">${line.slice(2)}</li>`;
          if (line.trim() === '') return '';
          return `<p style="font-size:13px;line-height:1.7;margin:4px 0">${line}</p>`;
        })
        .join('');

      html += `
        <article class="diary-entry" style="margin-bottom:20px;padding:20px;border-radius:16px;background:var(--bg-card);border:1.5px solid var(--stroke)">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font-size:28px">🗓️</span>
            <div>
              <div style="font-weight:800;font-size:15px">${date}</div>
              <div style="font-size:12px;color:var(--muted)">${labels[date] || ''}</div>
            </div>
          </div>
          ${rendered}
        </article>
      `;
    } catch (e) {
      console.error(`Failed to load diary for ${date}:`, e);
    }
  }

  entries.innerHTML = html || '<p class="help">No diary entries yet. / 还没有日记。</p>';
})();
