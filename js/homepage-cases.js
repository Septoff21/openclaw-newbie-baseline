// homepage-cases.js — Render verified projects on homepage
(async()=>{
  const el = document.getElementById('homepage-cases');
  if(!el) return;
  try{
    const data = await fetch('./api/claw-directory.json').then(r=>r.json());
    const verified = (data.items||[]).filter(i=>i.status==='verified' && i.url);
    if(!verified.length) return;
    const catEmoji = {
      directory:'📂',skills:'🧩',live:'🌐',security:'🔒',diary:'📝',
      onboarding:'🎯','im-bot':'🤖','multi-platform':'🔗',lightweight:'🪶',
      docker:'🐳',infrastructure:'🏗️',personal:'📓',default:'🦞'
    };
    function getEmoji(tags){
      for(const t of(tags||[]))if(catEmoji[t])return catEmoji[t];
      return catEmoji.default;
    }
    const catLabel = {
      directory:'Directory',skills:'Skills',onboarding:'Onboarding',
      diary:'Diary','im-bot':'Chat Bot','multi-platform':'Multi-Platform',
      lightweight:'Lightweight',docker:'Docker',infrastructure:'Infrastructure',
      personal:'Personal'
    };
    function getCat(tags){
      for(const t of(tags||[]))if(catLabel[t])return catLabel[t];
      return 'Project';
    }
    el.innerHTML = verified.slice(0,6).map(it=>`
      <a class="dir-blog-card" href="${it.url}" target="_blank" rel="noopener" style="text-decoration:none">
        <div class="dir-card-thumb cat-${(it.tags||[])[0]||'default'}">${getEmoji(it.tags)}</div>
        <div class="dir-card-body">
          <span class="dir-card-category verified-cat">✅ ${getCat(it.tags)}</span>
          <h3 class="dir-card-title">${it.name}</h3>
          <p class="dir-card-desc">${(it.desc||'').split('\n')[0]}</p>
          <div class="dir-card-meta">
            <span>${it.verifiedAt||''}</span>
            <span style="color:var(--green);font-weight:700">Visit →</span>
          </div>
        </div>
      </a>
    `).join('');
  }catch(e){console.warn('homepage-cases:',e)}
})();
