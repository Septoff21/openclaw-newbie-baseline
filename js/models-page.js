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
    </article>
  `).join('');
})();
