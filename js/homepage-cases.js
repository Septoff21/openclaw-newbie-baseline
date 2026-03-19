// homepage-cases.js — Render verified projects on homepage (enhanced)
(async()=>{
  const el = document.getElementById('homepage-cases');
  if(!el) return;
  try{
    const data = await fetch('./api/claw-directory.json').then(r=>r.json());
    const verified = (data.items||[]).filter(i=>i.status==='verified' && i.url);
    if(!verified.length){
      el.innerHTML='<p class="help" style="text-align:center;padding:32px">No verified projects yet — be the first! / 暂无认证项目——来当第一个吧！</p>';
      return;
    }
    const catEmoji = {
      directory:'📂',skills:'🧩',live:'🌐',security:'🔒',diary:'📝',
      onboarding:'🎯','im-bot':'🤖','multi-platform':'🔗',lightweight:'🪶',
      docker:'🐳',infrastructure:'🏗️',personal:'📓',models:'📊',default:'🦞'
    };
    function getEmoji(tags){
      for(const t of(tags||[]))if(catEmoji[t])return catEmoji[t];
      return catEmoji.default;
    }
    const catLabel = {
      directory:'Directory',skills:'Skills',onboarding:'Onboarding',
      diary:'Diary','im-bot':'Chat Bot','multi-platform':'Multi-Platform',
      lightweight:'Lightweight',docker:'Docker',infrastructure:'Infrastructure',
      personal:'Personal',live:'Live Site',models:'Models',security:'Security'
    };
    function getCat(tags){
      for(const t of(tags||[]))if(catLabel[t])return catLabel[t];
      return 'Project';
    }
    function timeAgo(dateStr){
      if(!dateStr)return '';
      const d=new Date(dateStr),now=new Date(),diff=Math.floor((now-d)/864e5);
      if(diff<1)return 'today';
      if(diff<7)return diff+'d ago';
      if(diff<30)return Math.floor(diff/7)+'w ago';
      return dateStr;
    }
    // Shuffle for variety, but keep deterministic via seed
    const shuffled = verified.sort(()=>0.5-Math.random());
    const picked = shuffled.slice(0,6);
    el.innerHTML = picked.map((it,idx)=>{
      const desc = (it.desc||'').split('\n')[0];
      const descCn = (it.desc||'').split('\n').slice(1).join(' ').trim();
      const mainTag = (it.tags||[])[0]||'default';
      const tags = (it.tags||[]).filter(t=>t!=='live').slice(0,3);
      return `
      <a class="dir-blog-card cases-card" href="${it.url}" target="_blank" rel="noopener" style="text-decoration:none;animation-delay:${idx*60}ms">
        <div class="dir-card-thumb cat-${mainTag}">${getEmoji(it.tags)}</div>
        <div class="dir-card-body">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">
            <span class="dir-card-category verified-cat">✅ ${getCat(it.tags)}</span>
            <span class="badge verified" style="font-size:10px;padding:2px 8px">Verified</span>
          </div>
          <h3 class="dir-card-title">${it.name}</h3>
          <p class="dir-card-desc">${desc}</p>
          ${descCn?`<p class="dir-card-desc" style="color:var(--muted);font-size:12px">${descCn}</p>`:''}
          <div class="dir-card-tags" style="margin:10px 0 0">
            ${tags.map(t=>`<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="dir-card-meta" style="margin-top:12px">
            <span style="color:var(--muted)">${timeAgo(it.verifiedAt)}</span>
            <span style="color:var(--green);font-weight:700">Visit →</span>
          </div>
        </div>
      </a>`;
    }).join('');
  }catch(e){
    console.warn('homepage-cases:',e);
    el.innerHTML='<p class="help" style="text-align:center;padding:32px;color:var(--red)">Failed to load projects / 加载项目失败</p>';
  }
})();
