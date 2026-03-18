/* scroll-reveal.js — Lightweight scroll animations, no dependencies */
(function(){
  // Add CSS for reveal animations
  if(!document.getElementById('reveal-style')){
    var s = document.createElement('style');
    s.id = 'reveal-style';
    s.textContent = [
      '.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1)}',
      '.reveal.visible{opacity:1;transform:translateY(0)}',
      '.reveal.delay-1{transition-delay:.1s}',
      '.reveal.delay-2{transition-delay:.2s}',
      '.reveal.delay-3{transition-delay:.3s}',
      '.reveal.delay-4{transition-delay:.4s}',
      // Stagger children
      '.stagger .reveal:nth-child(1){transition-delay:0s}',
      '.stagger .reveal:nth-child(2){transition-delay:.08s}',
      '.stagger .reveal:nth-child(3){transition-delay:.16s}',
      '.stagger .reveal:nth-child(4){transition-delay:.24s}',
      '.stagger .reveal:nth-child(5){transition-delay:.32s}',
      '.stagger .reveal:nth-child(6){transition-delay:.4s}',
      // Stat counter
      '.stat-num{transition:color .3s}',
      '.stat-num.counting{color:var(--red)!important}'
    ].join('\n');
    document.head.appendChild(s);
  }

  // Mark elements for reveal
  function markReveal(){
    // Panels
    document.querySelectorAll('.panel:not(.reveal)').forEach(function(el,i){
      el.classList.add('reveal');
      if(i % 3 === 1) el.classList.add('delay-1');
      if(i % 3 === 2) el.classList.add('delay-2');
    });
    // Cards
    document.querySelectorAll('.card:not(.reveal),.dir-card:not(.reveal),.model-card:not(.reveal)').forEach(function(el){
      el.classList.add('reveal');
    });
    // Hero children (subtle)
    var hero = document.querySelector('.hero');
    if(hero && !hero.dataset.revealMarked){
      hero.dataset.revealMarked = '1';
      var children = hero.querySelectorAll('h1,.subtitle,.eyebrow');
      children.forEach(function(c,i){
        c.classList.add('reveal');
        if(i>0) c.classList.add('delay-'+i);
      });
    }
    // Status items
    document.querySelectorAll('.status-item:not(.reveal)').forEach(function(el){
      el.classList.add('reveal');
    });
  }

  // Intersection Observer
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // Counter animation for stat numbers
        var num = entry.target.querySelector('.stat-num,[style*="font-weight:900"]');
        if(num && !num.dataset.counted){
          num.dataset.counted = '1';
          animateCount(num);
        }
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});

  // Animate count up
  function animateCount(el){
    var text = el.textContent.trim();
    var target = parseInt(text,10);
    if(isNaN(target) || target > 999) return;
    el.classList.add('counting');
    var current = 0;
    var step = Math.max(1, Math.floor(target / 20));
    var timer = setInterval(function(){
      current += step;
      if(current >= target){
        current = target;
        clearInterval(timer);
        el.classList.remove('counting');
      }
      el.textContent = current;
    },40);
  }

  // Init
  function init(){
    markReveal();

    // Performance guard: disable reveal animations on low-motion/mobile contexts
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    if(reduceMotion || mobile){
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
      return;
    }

    document.querySelectorAll('.reveal').forEach(function(el){
      observer.observe(el);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
