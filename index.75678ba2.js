(()=>{let e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-couple"),u=0,n=()=>{u<5&&(e.classList.remove("hidden"),t.addEventListener("click",r))},o=setInterval(()=>{e.classList.contains("hidden")&&(e.classList.remove("hidden"),clearInterval(o))},1e3),r=n=>{(n.target.classList.contains("modal-yes")||n.target.classList.contains("modal-no"))&&(e.classList.add("hidden"),t.removeEventListener("click",r),(u+=1)<5&&setTimeout(i,1e3))},i=()=>{setTimeout(()=>{n()},1e3)};i()})(),(()=>{let e=document.querySelectorAll(".animate-image"),t=0;setInterval(()=>{e.forEach(e=>e.classList.remove("animated")),e[t].classList.add("animated"),t=(t+1)%e.length},1500)})(),(()=>{let e=document.querySelector(".interactive-button"),t=document.querySelector(".start-button"),u=document.querySelector(".interactive-result"),n=document.querySelector(".interactive-timer"),o=document.querySelector(".modal-i-overlay"),r=document.querySelector(".modal-i-title"),i=document.querySelector(".modal-i-close"),c=0,l=0,s=10;t.addEventListener("click",()=>{c=0,function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),s=10,n.textContent=s;let i=setInterval(()=>{s--,n.textContent=s,0===s&&(clearInterval(i),e.setAttribute("disabled",""),t.removeAttribute("disabled"),u.textContent=`\u{417}\u{430}\u{440}\u{43E}\u{431}\u{43B}\u{435}\u{43D}\u{43E}: ${l} $ITCOIN`,r.textContent=`\u{412}\u{438} \u{437}\u{430}\u{440}\u{43E}\u{431}\u{438}\u{43B}\u{438} ${c} $ITCOIN, \u{443}\u{441}\u{44C}\u{43E}\u{433}\u{43E} \u{43B}\u{438}\u{448}\u{435} \u{437}\u{430} 10 \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`,o.classList.remove("hidden"))},1e3)}()}),e.addEventListener("click",function(){c++,l++}),i.addEventListener("click",()=>{o.classList.add("hidden")})})();const e=document.querySelector(".time-input"),t=document.querySelector(".time-start-button"),u=document.querySelector(".message");t.addEventListener("click",()=>{let t=parseInt(e.value,10);if(isNaN(t)||t<=0){u.textContent="Будь ласка, введіть коректний час!";return}u.textContent=`\u{41E}\u{447}\u{456}\u{43A}\u{443}\u{439}\u{442}\u{435} ${t} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}...`,setTimeout(()=>{u.textContent="Час вийшов!"},1e3*t)});
//# sourceMappingURL=index.75678ba2.js.map