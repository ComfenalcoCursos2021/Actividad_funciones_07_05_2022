let producto_1 = {
    titulo: "Koaj",
    parrafo: "Elegir un Camisa Manga Corta Hombre perfecto es una tarea abrumadora. Uno tiene que probar y probar diferentes productos disponibles en el mercado para obtener lo mejor.",
    logo: "img/koaj_logo.png",
    img: "img/koaj.png",
    id: document.querySelector("#producto1")
};
let producto_2 = {
    titulo: "Arturo Calle",
    parrafo: "Compra en Arturo Calle con la tarjeta de crédito de Codensa y recibe un 25% de descuento. Visita nuestra tienda y recibe un 25% de dcto* pagando con la tarjeta de crédito Codensa.",
    logo: "img/ac_logo.png",
    img: "img/ac.png",
    id: document.querySelector("#producto2")
};
let producto_3 = {
    titulo: "xiaomi",
    parrafo: "Pulsera inteligente Xiaomi Mi Smart Band 6 personaliza tu estilo con más de 60 tipos de pantallas y 30 modalidades deportivas.",
    logo: "img/xiaomi_logo.jpg",
    img: "img/xiaomi.png",
    id: document.querySelector("#producto3")
};

let mostrar = (
    titulo="Titulo", 
    parrafo="Descripcion", 
    logo="img/defaul_logo.png", 
    img="img/defaul.png", id)=>{

    let caja = id;
    let html = //html
        `<div class="circle">
            <img src="${logo}" class="logo">
        </div>
        <div class="content">
            <h2>${titulo}</h2>
            <p>${parrafo}</p>
            <a href="galeria.html">Ver Más</a>
        </div>
        <img src="${img}" class="product_img">`;
    caja.insertAdjacentHTML("beforeend", html);
}
let defaul = {
    titulo: undefined,
    parrafo: undefined,
    logo: undefined,
    img: undefined
};
mostrar(...Object.values(producto_1));
mostrar(...Object.values(producto_2));
mostrar(...Object.values(producto_3));
mostrar(...Object.values(defaul), document.querySelector("#producto4"));