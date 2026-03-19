// Scroll-to-top button
(function(){
  var btn=document.querySelector('.scroll-top');
  if(!btn)return;
  var ticking=false;
  function onScroll(){
    if(!ticking){
      requestAnimationFrame(function(){
        btn.classList.toggle('visible',window.scrollY>400);
        ticking=false;
      });
      ticking=true;
    }
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  btn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
})();
