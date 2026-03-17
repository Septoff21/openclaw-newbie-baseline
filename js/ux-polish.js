// UX Polish: back-to-top, page transitions, smooth interactions
(function() {
  // Back to top button
  const topBtn = document.createElement('button');
  topBtn.innerHTML = '↑';
  topBtn.setAttribute('aria-label', 'Back to top / 回到顶部');
  topBtn.style.cssText = 'position:fixed;bottom:130px;right:20px;z-index:9997;width:40px;height:40px;border-radius:50%;background:var(--bg-card);border:2px solid var(--stroke);color:var(--fg);font-size:18px;cursor:pointer;box-shadow:var(--shadow);transition:.3s;opacity:0;pointer-events:none;display:flex;align-items:center;justify-content:center';
  topBtn.onclick = () => window.scrollTo({top:0,behavior:'smooth'});
  document.body.appendChild(topBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      topBtn.style.opacity = '1'; topBtn.style.pointerEvents = 'auto';
    } else {
      topBtn.style.opacity = '0'; topBtn.style.pointerEvents = 'none';
    }
  }, {passive:true});

  // Page enter animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });

  // Card ripple effect on touch
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card, .dir-card, .model-card, .cta');
    if (!card) return;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(192,57,43,0.1);width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;transform:scale(0);animation:ripple .5s ease-out;pointer-events:none`;
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });

  // Add ripple keyframes if not exists
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes ripple{to{transform:scale(2);opacity:0}}';
    document.head.appendChild(style);
  }
})();
