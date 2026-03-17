// Dark mode toggle with localStorage persistence
(function() {
  const KEY = 'openclaw-theme';
  const btn = document.getElementById('theme-toggle');

  function getTheme() {
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  applyTheme(getTheme());

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();
