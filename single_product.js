let singleProduct;

const link = window.location.search;
const buscarPagina = new URLSearchParams(link);
singleProduct = buscarPagina.get("id").replace('"', "");

const productoPorSeparado = productsList.find((object) => object.id == singleProduct)

let productosLink = document.getElementById("productos")

productosLink.innerHTML += 

`<section class="card_list">
    <figure class= "card_figure"><img class= "card_img" src="${productoPorSeparado.imagenProducto}"></figure>
    <article class="card_article">
        <h2 class="name_detail">${productoPorSeparado.item}</h2>
        <p class='descri_detail'>${productoPorSeparado.sobreModelo}</p>
        <h5 class="price_detail"> ${productoPorSeparado.precio}</h5>
        <p class="collect_detail">Collection: ${productoPorSeparado.tipo}</p>
        
        <button id="añadir" class="button is-black button_añadir">Añadir</button>

    </article>
</section>;`


/* `

<section class="visualizar_producto">
    <figure class="seccion_imagen_producto">
        <img class="imagen_producto" src="${productoPorSeparado.imagenProducto}">
    </figure>

    <article class="seccion_informacion">
        <span class="titulo_producto">${productoPorSeparado.item}</span>
        <span class="texto_info_modelo">${productoPorSeparado.sobreModelo}</span>
        <span class="texto_precio">${productoPorSeparado.precio}</span>
        <span class="texto_tipo_prenda">${productoPorSeparado.tipo}</span>
    </article>
</section>;

` */