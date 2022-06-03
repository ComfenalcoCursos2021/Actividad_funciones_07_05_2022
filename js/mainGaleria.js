let btn = document.querySelector(".colour-select");
let pro = document.querySelector("#producto");
btn.addEventListener("click", (e)=>{
   if(e.target.className != "colour-select"){
       pro.style = //css
       `background-image : url('${e.target.dataset.producto}');`;
   }
})