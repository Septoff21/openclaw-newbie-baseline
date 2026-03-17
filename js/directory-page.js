(async()=>{
  const grid=document.getElementById('directory-grid');
  const data=await fetch('./api/claw-directory.json').then(r=>r.json());

  // Count header
  const total=data.items.length;
  const verified=data.items.filter(i=>i.status==='verified').length;
  const repoOnly=total-verified;
  const header=document.createElement('div');
  header.className='panel';
  header.innerHTML=`<p class="help">Showing <b>${total}</b> projects (${verified} verified live / 已验证, ${repoOnly} repo-only / 仅仓库)</p>`;
  grid.before(header);

  function render(items){
    grid.innerHTML=items.map(it=>`
      <article class="dir-card ${it.status}">
        <div class="dir-card-head">
          <h4>${it.name}</h4>
          <span class="badge ${it.status==='verified'?'verified':'unverified'}">
            ${it.status==='verified'?'✅ Verified 已验证':'📦 Repo 仅仓库'}
          </span>
        </div>
        <p class="dir-desc">${it.desc||'No description yet. / 暂无描述。'}</p>
        <div class="dir-tags">${(it.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="dir-meta">
          ${it.verifiedAt?`<span class="meta">Last verified / 上次验证: ${it.verifiedAt}</span>`:''}
        </div>
        <div class="dir-actions">
          ${it.url?`<a class="cta primary" href="${it.url}" target="_blank" rel="noopener">🔗 Open / 打开</a>`:''}
          <a class="cta" href="https://github.com/${it.repo}" target="_blank" rel="noopener">📦 Repo / 仓库</a>
          <button class="cta" data-copy-prompt="${it.name}" title="Copy a prompt to explore this project in OpenClaw / 复制提示词来探索此项目">📋 Copy Prompt / 复制提示词</button>
          <button class="cta" data-share="${it.name}" data-url="${it.url||''}">📤 Share / 分享</button>
        </div>
      </article>
    `).join('');
  }

  render(data.items);

  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tag=btn.dataset.tag;
      if(tag==='all') render(data.items);
      else if(tag==='verified'||tag==='repo-only') render(data.items.filter(i=>i.status===tag));
      else render(data.items.filter(i=>(i.tags||[]).includes(tag)));
    });
  });

  document.addEventListener('click',e=>{
    if(e.target.dataset.copyPrompt){
      const name=e.target.dataset.copyPrompt;
      const prompt=`I want to explore ${name}. Give me a 1-paragraph overview, then list the steps to install and run it in OpenClaw. Include verification commands.\n\n我想了解 ${name}。给我一段概述，然后列出在 OpenClaw 中安装和运行的步骤。包含验证命令。`;
      navigator.clipboard.writeText(prompt);
      e.target.textContent='Copied! ✓ 已复制！';
      setTimeout(()=>e.target.textContent='📋 Copy Prompt / 复制提示词',1200);
    }
    if(e.target.dataset.share){
      const name=e.target.dataset.share;
      const url=e.target.dataset.url||'';
      const text=`Check out ${name} — an OpenClaw project 🦞 快来看看 ${name}`;
      if(navigator.share){
        navigator.share({title:name,text,url});
      } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,'_blank');
      }
    }
  });
})();
