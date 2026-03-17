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

  // Unsplash images for each day (free, no attribution required)
  const images = {
    '2026-03-17': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop', // AI/art creation
    '2026-03-16': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop', // code on screen
    '2026-03-15': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop', // dashboard/data
    '2026-03-14': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop'  // team/start
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
          if (line.startsWith('![')) { const m = line.match(/!\[([^\]]*)\]\(([^)]+)\)/); if (m) return `<img src="${m[2]}" alt="${m[1]}" style="width:100%;border-radius:12px;margin:0 0 12px;object-fit:cover;max-height:180px" loading="lazy" />`; }
          if (line.startsWith('## ')) return `<h3 style="margin:0 0 8px;font-size:16px;color:var(--red)">${line.slice(3)}</h3>`;
          if (line.startsWith('### ')) return `<h4 style="margin:16px 0 6px;font-size:14px;color:var(--blue)">${line.slice(4)}</h4>`;
          if (line.startsWith('- ')) return `<li style="margin:4px 0;font-size:13px;line-height:1.6">${line.slice(2)}</li>`;
          if (line.trim() === '') return '';
          return `<p style="font-size:13px;line-height:1.7;margin:4px 0">${line}</p>`;
        })
        .join('');

      const imgUrl = images[date];
      const imgHtml = imgUrl ? `<img src="${imgUrl}" alt="${date}" style="width:100%;height:180px;object-fit:cover;border-radius:12px;margin-bottom:14px" loading="lazy" onerror="this.style.display='none'"/>` : '';

      html += `
        <article class="diary-entry" style="margin-bottom:20px;padding:20px;border-radius:16px;background:var(--bg-card);border:1.5px solid var(--stroke)">
          ${imgHtml}
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
