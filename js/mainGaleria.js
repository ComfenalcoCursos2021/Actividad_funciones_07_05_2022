addEventListener("DOMContentLoaded", async()=>{
    let btn = document.querySelector(".colour-select");
    let img = document.querySelector("#producto");
    let datosUrl = location.search;
    let urlData = new URLSearchParams(datosUrl);
    let peticion = await fetch("data.json");
    let json = await peticion.json();

   
    document.head.children[0].content = json[`${urlData.get('id')}`].parrafo;
    document.head.children[1].content = `https://comfenalcocursos2021.github.io/Actividad_funciones_07_05_2022/${json[`${urlData.get('id')}`].img}`;
    document.head.children[5].innerText = json[`${urlData.get('id')}`].titulo;
    document.head.children[7].href = json[`${urlData.get('id')}`].logo;

    // image/x-icon
    document.querySelector("#compañia").src = json[`${urlData.get('id')}`].compañia;
    document.querySelector("#logoFranquisia").src = json[`${urlData.get('id')}`].logo;
    document.querySelector("#titulo").innerText = json[`${urlData.get('id')}`].titulo;
    document.querySelector("#tecnica").innerHTML = json[`${urlData.get('id')}`].ficha;
    document.querySelector("#producto").src = json[`${urlData.get('id')}`].img;

    json[`${urlData.get('id')}`].similares.forEach((data, id) => {
        btn.insertAdjacentHTML("beforeend", //html
        `
            <div><img src="${data.logo}" data-producto="${data.img}" data-titulo="${data.titulo}" data-ficha="${data.ficha}" data-parrafo="${data.parrafo}"></div>
        `
        );
    });



    btn.addEventListener("click", (e)=>{
    if(e.target.className != "colour-select"){
        document.head.children[0].content = e.target.dataset.parrafo;
        document.head.children[1].content = `https://comfenalcocursos2021.github.io/Actividad_funciones_07_05_2022/${e.target.dataset.producto}`;
        document.head.children[5].innerText = e.target.dataset.titulo;
        document.head.children[7].href = e.target.src;
        
        img.src = `${e.target.dataset.producto}`;
        document.querySelector("#logoFranquisia").src = e.target.src;
        document.querySelector("#titulo").innerText = e.target.dataset.titulo;
        document.querySelector("#tecnica").innerHTML = e.target.dataset.ficha;
    }
    })
})