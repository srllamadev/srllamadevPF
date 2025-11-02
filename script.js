// Animated starfield background + interacciones
document.addEventListener('DOMContentLoaded',()=>{
  // 1. Crear estrellas animadas
  const starfield = document.getElementById('starfield');
  const starCount = 120;
  for(let i=0; i<starCount; i++){
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random()*3+1;
    star.style.width = size+'px';
    star.style.height = size+'px';
    star.style.left = Math.random()*100+'%';
    star.style.top = Math.random()*100+'%';
    star.style.animationDuration = (Math.random()*3+2)+'s';
    star.style.animationDelay = Math.random()*2+'s';
    starfield.appendChild(star);
  }

  // 2. Año dinámico
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  // 3. Copy email
  const copyBtn = document.getElementById('copyEmail');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const text = copyBtn.textContent.trim();
      try{
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = '✓ Copied!';
        setTimeout(()=> copyBtn.textContent = text,2000);
      }catch(e){
        const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
        try{document.execCommand('copy'); copyBtn.textContent='✓ Copied!'; setTimeout(()=>copyBtn.textContent=text,2000)}catch(e){}
        ta.remove();
      }
    });
  }

  // 4. Smooth scroll para anclas (opcional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
