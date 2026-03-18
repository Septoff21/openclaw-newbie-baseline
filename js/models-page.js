(async()=>{
  const summaryEl = document.getElementById('snapshot-summary');
  const listEl = document.getElementById('model-list');
  if(!summaryEl && !listEl) return;
  try{
    const data = await fetch('./api/models-daily.json').then(r=>{
      if(!r.ok) throw new Error('Models API '+r.status);
      return r.json();
    });
    if(summaryEl){
      summaryEl.innerHTML=`
        <div class="stat"><b>${data.total||0}</b><span>Total models / 总模型数</span></div>
        <div class="stat"><b>${data.newCount||0}</b><span>New today / 今日新增</span></div>
        <div class="stat"><b>${(data.models||[]).length}</b><span>Top newest / 最新</span></div>`;
    }
    if(!listEl) return;
    const modalityIcon=m=>{
      if(!m)return '📄';
      if(m.includes('image')&&m.includes('video')&&m.includes('audio'))return '🎬';
      if(m.includes('image'))return '🖼️';
      return '📄';
    };
    const priceLabel=p=>p==='0'||p===0?'Free':'$'+Number(p).toFixed(6);
    listEl.innerHTML=(data.models||[]).map(m=>`
      <article class="model-card">
        <div class="model-card-head">
          <span class="model-icon">${modalityIcon(m.modality)}</span>
          <div>
            <h4>${m.name||m.id}</h4>
            <code class="model-id">${m.id}</code>
          </div>
        </div>
        <div class="model-meta">
          <span>CTX:${(m.ctx||0).toLocaleString()}</span>
          <span>In:${priceLabel(m.pPrice)}</span>
          <span>Out:${priceLabel(m.cPrice)}</span>
        </div>
        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
          <button class="cta model-copy-btn" style="font-size:11px;padding:5px 10px" data-cmd="openclaw config set model.default ${m.id}">📋 Copy config / 复制配置</button>
          <code style="font-size:10px;color:var(--muted);padding:5px;background:var(--bg);border-radius:6px;align-self:center">Paste after installing / 安装后粘贴</code>
        </div>
      </article>
    `).join('');
    listEl.querySelectorAll('.model-id').forEach(el=>{
      el.style.cursor='pointer';
      el.title='Click to copy / 点击复制';
      el.addEventListener('click',()=>{
        try{navigator.clipboard.writeText(el.textContent);}catch(e){console.error('Copy failed:',e);}
        const orig=el.style.color;
        el.style.color='var(--green)';
        setTimeout(()=>el.style.color=orig,800);
      });
    });
    listEl.querySelectorAll('.model-copy-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        try{navigator.clipboard.writeText(btn.dataset.cmd);}catch(e){console.error('Copy failed:',e);}
        btn.textContent='Copied! ✓';
        setTimeout(()=>btn.textContent='📋 Copy config / 复制配置',1200);
      });
    });
  }catch(e){
    console.error('models-page:',e);
    if(listEl) listEl.innerHTML='<p class="help">Model data unavailable. / 模型数据暂时不可用。</p>';
    if(summaryEl) summaryEl.innerHTML='<p class="help">Loading failed / 加载失败</p>';
  }
})();
