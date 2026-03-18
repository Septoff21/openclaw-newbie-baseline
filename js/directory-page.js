(async()=>{
  const grid = document.getElementById('directory-grid');
  if(!grid) return;
  const data = await fetch('./api/claw-directory.json').then(r=>r.json());
  const items = data.items || [];
  const total = items.length;
  const verified = items.filter(i=>i.status==='verified');
  const repoOnly = items.filter(i=>i.status!=='verified');

  // Category emoji map
  const catEmoji = {
    directory:'📂', skills:'🧩', live:'🌐', security:'🔒', diary:'📝',
    automation:'⚡', chat:'💬', monitor:'📡', deploy:'🚀', analytics:'📊',
    onboarding:'🎯', 'im-bot':'🤖', 'multi-platform':'🔗', lightweight:'🪶',
    docker:'🐳', infrastructure:'🏗️', personal:'📓', default:'🦞'
  };
  function getEmoji(tags){
    for(const t of (tags||[])) if(catEmoji[t]) return catEmoji[t];
    return catEmoji.default;
  }
  const catLabel = {
    directory:'Directory 目录', skills:'Skills 技能', live:'Live 在线',
    security:'Security 安全', diary:'Diary 日记', automation:'Automation 自动化',
    chat:'Chat 聊天', monitor:'Monitor 监控', deploy:'Deploy 部署',
    analytics:'Analytics 分析', onboarding:'Onboarding 入门',
    'im-bot':'Chat Bot 聊天机器人', 'multi-platform':'Multi-Platform 多平台',
    lightweight:'Lightweight 轻量', docker:'Docker 容器',
    infrastructure:'Infrastructure 基础设施', personal:'Personal 个人'
  };
  function getCategory(tags){
    for(const t of (tags||[])) if(catLabel[t]) return {key:t,label:catLabel[t]};
    return {key:'other',label:'Project 项目'};
  }

  // Header with count + search
  const header = document.createElement('div');
  header.innerHTML = `
    <p class="help">Showing <b>${total}</b> projects · ${verified.length} verified / 已验证</p>
    <input type="text" class="dir-search" id="dir-search" placeholder="🔍 Search projects... / 搜索项目..." aria-label="Search projects" />
  `;
  grid.before(header);

  // Featured section
  const featuredWrap = document.createElement('div');
  featuredWrap.id = 'featured-section';
  grid.before(featuredWrap);

  function renderFeatured(list){
    if(!list.length){featuredWrap.innerHTML='';return;}
    featuredWrap.innerHTML = `
      <div style="margin-bottom:8px">
        <span style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--green)">✅ Featured Verified / 精选已验证</span>
      </div>
      <div class="featured-grid">
        ${list.map(it=>{
          const cat = getCategory(it.tags);
          const emoji = getEmoji(it.tags);
          return `
            <a class="featured-card" href="${it.url||'https://github.com/'+it.repo}" target="_blank" rel="noopener">
              <div class="featured-thumb cat-${cat.key}">${emoji}</div>
              <div class="featured-body">
                <span class="dir-card-category verified-cat">✅ ${cat.label}</span>
                <h3 class="featured-title">${it.name}</h3>
                <p class="featured-desc">${it.desc||'No description.'}</p>
                <div class="featured-meta">
                  <span>${it.verifiedAt?'Verified '+it.verifiedAt:''}</span>
                  <span class="featured-arrow">Visit →</span>
                </div>
              </div>
            </a>`;
        }).join('')}
      </div>`;
  }

  function renderCards(list){
    if(!list.length){
      grid.innerHTML='<p style="text-align:center;color:var(--muted);grid-column:1/-1;padding:40px">No projects found. / 没有找到项目。</p>';
      return;
    }
    grid.innerHTML = list.map(it=>{
      const cat = getCategory(it.tags);
      const emoji = getEmoji(it.tags);
      const isVerified = it.status==='verified';
      return `
        <article class="dir-blog-card">
          <div class="dir-card-thumb cat-${cat.key}">${emoji}</div>
          <div class="dir-card-body">
            <span class="dir-card-category ${isVerified?'verified-cat':''}">
              ${isVerified?'✅':'📦'} ${cat.label}
            </span>
            <h3 class="dir-card-title">${it.name}</h3>
            <p class="dir-card-desc">${it.desc||'No description yet. / 暂无描述。'}</p>
            <div class="dir-card-tags">${(it.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
            <div class="dir-card-meta">
              <span>${it.verifiedAt?'Verified: '+it.verifiedAt:'Not verified'}</span>
              <span>${isVerified?'Live 在线':'Repo 仅仓库'}</span>
            </div>
            <div class="dir-card-actions">
              ${it.url?`<a class="cta primary" href="${it.url}" target="_blank" rel="noopener">🔗 Open</a>`:''}
              <a class="cta" href="https://github.com/${it.repo}" target="_blank" rel="noopener">📦 Repo</a>
              <button class="cta" data-copy-prompt="${it.name}" title="Copy prompt / 复制提示词">📋</button>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  // Initial render
  renderFeatured(verified);
  renderCards(items);

  // Filter buttons
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;
      let filtered;
      if(tag==='all') filtered = items;
      else if(tag==='verified') filtered = items.filter(i=>i.status==='verified');
      else if(tag==='repo-only') filtered = items.filter(i=>i.status!=='verified');
      else filtered = items.filter(i=>(i.tags||[]).includes(tag));
      // Show featured only for "all" or "verified"
      if(tag==='all') renderFeatured(verified);
      else if(tag==='verified') renderFeatured(filtered);
      else featuredWrap.innerHTML='';
      renderCards(filtered);
    });
  });

  // Live search
  document.getElementById('dir-search')?.addEventListener('input',e=>{
    const q = e.target.value.toLowerCase();
    if(!q){renderFeatured(verified);renderCards(items);return;}
    featuredWrap.innerHTML='';
    renderCards(items.filter(i=>
      i.name.toLowerCase().includes(q)||
      (i.desc||'').toLowerCase().includes(q)||
      (i.tags||[]).some(t=>t.toLowerCase().includes(q))
    ));
  });

  // Copy prompt
  document.addEventListener('click',e=>{
    const copyBtn = e.target.closest('[data-copy-prompt]');
    if(copyBtn){
      const name = copyBtn.dataset.copyPrompt;
      const prompt = `I want to explore ${name}. Give me a 1-paragraph overview, then list the steps to install and run it in OpenClaw. Include verification commands.\n\n我想了解 ${name}。给我一段概述，然后列出在 OpenClaw 中安装和运行的步骤。包含验证命令。`;
      navigator.clipboard.writeText(prompt);
      copyBtn.textContent='✓';
      setTimeout(()=>copyBtn.textContent='📋',1200);
    }
  });
})();
