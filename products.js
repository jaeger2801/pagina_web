const productsList = [
    {
        imagenProducto: "https://i.pinimg.com/564x/00/91/a4/0091a4ef0326b683a9449ffa29ba9992.jpg",
        item: "Camisa Oversize High Vibes Bunny",
        precio: "32.000",
        material: "80% poliester, 20% algodón",
        sobreModelo: "La modelo mide 1.65 y usa talla M",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/be/66/2c/be662c4ab25fdcb4de7845111e2cae5e.jpg",
        item: "Camisa Oversize Alto Cilindraje",
        precio: "40.000",
        material: "100% algodón",
        sobreModelo: "La modelo mide 1.60 y usa talla XS",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/42/7b/11/427b11357d6a1388dcc49023096eb430.jpg",
        item: "Camisa Oversize Aleteo Salvaje",
        precio: "35.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "La modelo mide 1.62 y usa talla S",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/40/da/90/40da9061af353d5447092d18af109eb8.jpg",
        item: "Camisa Leyenda Aletosa",
        precio: "40.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "La modelo mide 1.62 y usa talla S",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/e6/5e/d4/e65ed46091565b4ed7fb5a471f64530c.jpg",
        item: "Sueter Pastel Aleta",
        precio: "80.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "La modelo mide 1.65 y usa talla M",
        tipo: "Sueter",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/5c/4a/f3/5c4af3f6449bef4207c9daff8e194b23.jpg",
        item: "Camisa Oversize CremAleta",
        precio: "40.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "El modelo mide 1.79 y usa talla L",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/ec/df/90/ecdf90a544fcad8c0bc509b6edd3eecc.jpg",
        item: "Camisa Oversize Azul celeste",
        precio: "35.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "El modelo mide 1.74 y usa talla M",
        tipo: "Camisa",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/2e/30/d9/2e30d9c0b700fa1e5200047f9d1db7cc.jpg",
        item: "Camiseta Mosaico Aletoso",
        precio: "40.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.77 y usa talla L",
        tipo: "Camiseta",
        tipo2: "Inferior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/6f/b2/57/6fb2576f9fd2f9b101fe94d8758798e8.jpg",
        item: "Pinta aletosa",
        precio: "80.000",
        descuento: "",
        material: "80% algodon 20% algodon",
        sobreModelo: "El modelo mide 1.87 y usa talla XL",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/5c/1e/b1/5c1eb14239d9230cc6544bef91786fc9.jpg",
        item: "Pinta aletosa vernao",
        precio: "90.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.72 y usa talla M",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/d6/d5/fc/d6d5fc78ab26eea553940fb2114d5f85.jpg",
        item: "Pinta naranja aletosa",
        precio: "110.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.82 y usa talla XL",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/2a/2d/a1/2a2da1d3c4f67e5db13296f94e063d89.jpg",
        item: "Pinta Max Combi Aleta",
        precio: "100.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.82 y usa talla XL",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/f1/c8/ef/f1c8eff2ef9c18aeee6c46197c9a5533.jpg",
        item: "Camisa flow urbano",
        precio: "40.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "La modelo mide 1.62 y usa talla M",
        tipo: "Camisa",
        tipo2: "Superior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/5d/c5/2a/5dc52a1164e14d2360df0c0a13a16e43.jpg",
        item: "Pinta Aleteo Asiático",
        precio: "55.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.57 y usa talla S",
        tipo: "Pinta",
        tipo2: "Completo"

    },

    {
        imagenProducto: "https://i.pinimg.com/564x/e9/af/aa/e9afaac16a74c7a7896853b21e9da306.jpg",
        item: "Pinta Aleteo Verdoso",
        precio: "120.000",
        descuento: "",
        material: "100% algodon",
        sobreModelo: "El modelo mide 1.67 y usa talla L",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/236x/bf/10/5a/bf105a7a9ec4506eb1f7753bcd310a49.jpg",
        item: "Pañoleta del Aleteo",
        precio: "10.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.77 y usa talla L",
        tipo: "Pañoleta",
        tipo2: "Superior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/1c/5e/4e/1c5e4e9902c87d66c4854f9f7c89588f.jpg",
        item: "Camisa Overzise PokerAleta",
        precio: "50.000",
        descuento: "",
        material: "100% algodón",
        sobreModelo: "El modelo mide 1.83 y usa talla XL",
        tipo: "Camisa Oversize",
        tipo2: "Superior"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/b2/a0/05/b2a00578e9f3e312a932e63f63428fe4.jpg",
        item: "Pinta Aleteo Veraniego Violeta",
        precio: "240.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.77 y usa talla L",
        tipo: "Pinta",
        tipo2: "Completo"
    },

    {
        imagenProducto: "https://i.pinimg.com/564x/4b/29/20/4b2920352d921809d21ecb74535ac82a.jpg",
        item: "Pinta Aleteo EcoFriendly",
        precio: "160.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "El modelo mide 1.73 y usa talla S",
        tipo: "Pinta",
        tipo2: "Completo"
    },
/* -------------------------------------------- */
    {
        imagenProducto: "https://i.pinimg.com/564x/56/70/b3/5670b312956dd8d54b7e92f731eb165c.jpg",
        item: "Tillas Aletosas Azul",
        precio: "40.000",
        descuento: "",
        material: "100% poliester",
        sobreModelo: "La modelo mide 1.73 y usa talla  EURO 38",
        tipo: "Calzado",
        tipo2: "inferior"
    },

]
function filtrado () {
productosDestacados.innerHTML = "";

}

const productosDestacados = document.getElementById("productos_destacados");
mostrar(productsList);

function mostrar(productsList) {
    productsList.forEach((producto) => {
        
        productosDestacados.innerHTML += 
        `<figure class= "card_figure"><img class= "card_img" src="${producto.imagenProducto}"></figure>
        <article class="card_article">
            <h2>${producto.item}</h2>
            <p>${producto.tipo}</p>
            <h3>${producto.material}</h3>
            <h5 class="card_price"> ${producto.precio}</h5>
        </article>
    </a>`
    })
}
