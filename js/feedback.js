// Feedback button — floating, opens GitHub issues
(function() {
  const btn = document.createElement('a');
  btn.href = 'https://github.com/Septoff21/openclaw-newbie-baseline/issues/new';
  btn.target = '_blank';
  btn.rel = 'noopener';
  btn.textContent = '💬 Feedback';
  btn.style.cssText = 'position:fixed;bottom:80px;right:16px;z-index:9998;background:var(--red);color:#fff;padding:10px 16px;border-radius:24px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:var(--shadow-md);transition:.3s;opacity:0.8';
  btn.onmouseenter = () => { btn.style.opacity = '1'; btn.style.transform = 'scale(1.05)'; };
  btn.onmouseleave = () => { btn.style.opacity = '0.8'; btn.style.transform = 'scale(1)'; };
  document.body.appendChild(btn);
})();
