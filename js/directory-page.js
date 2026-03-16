(async()=>{
  const grid=document.getElementById('directory-grid');
  const data=await fetch('./api/claw-directory.json').then(r=>r.json());

  // Count header
  const total=data.items.length;
  const verified=data.items.filter(i=>i.status==='verified').length;
  const repoOnly=total-verified;
  const header=document.createElement('div');
  header.className='panel';
  header.innerHTML=`<p class="help">Showing <b>${total}</b> projects (${verified} verified live, ${repoOnly} repo-only)</p>`;
  grid.before(header);

  function render(items){
    grid.innerHTML=items.map(it=>`
      <article class="dir-card ${it.status}">
        <div class="dir-card-head">
          <h4>${it.name}</h4>
          <span class="badge ${it.status==='verified'?'verified':'unverified'}">
            ${it.status==='verified'?'✅ Verified':'📦 Repo'}
          </span>
        </div>
        <p class="dir-desc">${it.desc||'No description yet.'}</p>
        <div class="dir-tags">${(it.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="dir-meta">
          ${it.verifiedAt?`<span class="meta">Last verified: ${it.verifiedAt}</span>`:''}
        </div>
        <div class="dir-actions">
          ${it.url?`<a class="cta" href="${it.url}" target="_blank" rel="noopener">Open</a>`:''}
          <a class="cta" href="https://github.com/${it.repo}" target="_blank" rel="noopener">Repo</a>
          <button class="cta" data-copy-prompt="${it.name}">Copy Prompt</button>
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
      const prompt=`I want to explore ${name}. Give me a 1-paragraph overview, then list the steps to install and run it in OpenClaw. Include verification commands.`;
      navigator.clipboard.writeText(prompt);
      e.target.textContent='Copied!';
      setTimeout(()=>e.target.textContent='Copy Prompt',1200);
    }
  });
})();
