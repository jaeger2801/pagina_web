let singleProduct;

const link = window.location.search;
const buscarPagina = new URLSearchParams(link);
productLink = buscarPagina.get("id").replace('"', "");

const productoPorSeparado = productos.find((object) => object.id == productLink)

let productosLink = document.getElementById("productos")

productosLink.innerHTML += `



`