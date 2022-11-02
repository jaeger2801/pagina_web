let singleProduct;

const link = window.location.search;
const buscarPagina = new URLSearchParams(link);
productLink = buscarPagina.get("id").replace('"', "");

const productoPorSeparado = productos.find((object) => object.id == productLink)

let productosLink = document.getElementById("productos")

productosLink.innerHTML += `

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
</section>

`