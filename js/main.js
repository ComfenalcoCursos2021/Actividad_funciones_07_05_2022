addEventListener("DOMContentLoaded", ()=>{
    document.body.innerHTML = "";
    let mostrar = async(titulo="Titulo", parrafo="Descripcion", logo="img/defaul_logo.png", img="img/defaul.png", id)=>{
        let petecion = await fetch("data.json");
        let json = await petecion.json();
        // let frag = document.createDocumentFragment();
        json.forEach((data, id) => {
            let div = document.createElement("DIV");
            div.classList.add('card');
            let html = //html
                `<div class="circle">
                    <img src="${data.logo}" class="logo">
                </div>
                <div class="content">
                    <h2>${data.titulo}</h2>
                    <p>${data.parrafo}</p>
                    <a href="galeria.html?id=${id}">Ver Más</a>
                </div>
                <img src="${data.img}" class="product_img">`;
            div.insertAdjacentHTML("beforeend", html);
            document.body.insertAdjacentElement("beforeend", div);
            // frag.appendChild(div);
        });
        // let html = //html
        //     `<div class="card">
        //         <div class="circle">
        //             <img src="${logo}" class="logo">
        //         </div>
        //         <div class="content">
        //             <h2>${titulo}</h2>
        //             <p>${parrafo}</p>
        //             <a href="galeria.html">Ver Más</a>
        //         </div>
        //         <img src="${img}" class="product_img">
        //     </div>`;
        // document.body.insertAdjacentHTML("beforeend", html);
    }
    mostrar();
})