// Pequeñas interacciones: año dinámico y copiar email
document.addEventListener('DOMContentLoaded',()=>{
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  const copyBtn = document.getElementById('copyEmail');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const text = copyBtn.textContent.trim();
      try{
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = '¡Copiado!';
        setTimeout(()=> copyBtn.textContent = text,1500);
      }catch(e){
        // fallback
        const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
        try{document.execCommand('copy'); copyBtn.textContent='¡Copiado!'; setTimeout(()=>copyBtn.textContent=text,1500)}catch(e){}
        ta.remove();
      }
    });
  }
});
