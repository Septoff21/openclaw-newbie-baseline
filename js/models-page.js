(async()=>{
  const data=await fetch('./api/models-daily.json').then(r=>r.json());

  document.getElementById('snapshot-summary').innerHTML=`
    <div class="stat"><b>${data.total}</b><span>Total models</span></div>
    <div class="stat"><b>${data.newCount}</b><span>New today</span></div>
    <div class="stat"><b>${data.models.length}</b><span>Top newest</span></div>
  `;

  const modalityIcon=m=>{
    if(!m) return '📄';
    if(m.includes('image')&&m.includes('video')&&m.includes('audio')) return '🎬';
    if(m.includes('image')) return '🖼️';
    return '📄';
  };
  const priceLabel=p=>p==='0'||p===0?'Free':'$'+Number(p).toFixed(6);

  document.getElementById('model-list').innerHTML=data.models.map(m=>`
    <article class="model-card">
      <div class="model-card-head">
        <span class="model-icon">${modalityIcon(m.modality)}</span>
        <div>
          <h4>${m.name||m.id}</h4>
          <code class="model-id">${m.id}</code>
        </div>
      </div>
      <div class="model-meta">
        <span>CTX: ${(m.ctx||0).toLocaleString()}</span>
        <span>In: ${priceLabel(m.pPrice)}</span>
        <span>Out: ${priceLabel(m.cPrice)}</span>
      </div>
      <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="cta" style="font-size:11px;padding:5px 10px" onclick="var cmd='openclaw config set model.default ${m.id}';navigator.clipboard.writeText(cmd);this.textContent='Copied! ✓';setTimeout(()=>this.textContent='📋 Copy config command',1200)">📋 Copy config command</button>
        <code style="font-size:10px;color:var(--muted);padding:5px;background:var(--bg);border-radius:6px;align-self:center">Paste this after installing OpenClaw</code>
      </div>
    </article>
  `).join('');

  // Add click-to-copy for model IDs
  document.querySelectorAll('.model-id').forEach(el=>{
    el.style.cursor='pointer';
    el.title='Click to copy';
    el.addEventListener('click',()=>{
      navigator.clipboard.writeText(el.textContent);
      const orig=el.style.color;
      el.style.color='var(--green)';
      setTimeout(()=>el.style.color=orig,800);
    });
  });
})();
