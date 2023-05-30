//menu

const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const overlay = document.createElement('div');

document.addEventListener('DOMContentLoaded', () => {
  menu.addEventListener('click', toggleMenu);
});

const toggleMenu = () => {
  overlay.classList.remove('ocultar-background');
  overlay.classList.add('pantalla-completa');
  const body = document.querySelector('body');
  body.appendChild(overlay);

  if (navegacion.classList.contains('ocultar')) {
    navegacion.classList.remove('ocultar');
  } else {
    navegacion.classList.add('ocultar');
  } botoncerrar();
};

const botoncerrar = () => {
  const btnCerrar = document.createElement('p');
  btnCerrar.textContent = 'x';
  btnCerrar.classList.add('btn-cerrar');
  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar);
  overlay.remove;

}

const cerrarMenu = (boton) => {
  boton.addEventListener('click', () => {
    navegacion.classList.add('ocultar');
    /*
    overlay.classList.add('ocultar-background');
    boton.remove();*/
  })
}

//productos

fetch("productos.json")
  .then((resp) => resp.json())
  .then((data) => {
    productos = [data]

    // generacion de productos 

    const container = document.createElement("div");
    container.classList.add("pro-conteiner");
    const contenedorProducto = document.querySelector(".contenedor-producto");

    productos[0].forEach(producto => {
      const product = document.createElement("div");
      product.classList.add("pro");

      const img = document.createElement("img");
      img.classList.add("img");
      img.setAttribute("src", producto.imgSrc);
      img.setAttribute("alt", "foto-producto");

      const description = document.createElement("div");
      description.classList.add("des");

      const spanDescripcion = document.createElement("span");
      spanDescripcion.textContent = producto.productoDescripcion;

      const h5 = document.createElement("h5");
      h5.textContent = producto.productoNombre;

      const h4 = document.createElement("h4");
      h4.textContent = producto.productoPrecio;

      description.appendChild(spanDescripcion);
      description.appendChild(h5);
      description.appendChild(h4);

      const button = document.createElement("button");
      button.classList.add("producto");
      button.setAttribute("id", "agregarProducto");
      button.textContent = "Agregar";

      button.addEventListener("click", () => {
        Swal.fire(
          '¡Agregado en el carrito!',
        

        );
      });

      button.addEventListener("click", function () {

        agregarProducto(producto.imgSrc, producto.productoNombre, producto.productoDescripcion, producto.productoPrecio, producto.id)


      });

      product.appendChild(img);
      product.appendChild(description);
      product.appendChild(button);

      container.appendChild(product);
    });

    contenedorProducto.appendChild(container);

  });

function agregarProducto(productoImagen, nombredelProducto, descripcion, productoPrecio, productoId) {

  var NuevoProducto = {
    imgSrc: '../' + productoImagen,
    productoNombre: nombredelProducto,
    productoDescripcion: descripcion,
    productoPrecio: productoPrecio,
    id: productoId

  };

  // guardar producto en local storage

  var carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito == null) {
    carrito = [];
  }
  carrito.push(NuevoProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  console.log(JSON.parse(localStorage.getItem("carrito")));


}

/*


carrito[0].forEach(producto => {
  const carTr = document.createElement("tr");
  const carTd = document.createElement("td");
  const carDiv = document.createElement("div");
  carDiv.classList.add("product-info");
  const carSpan = document.createElement("span");
  carSpan.classList.add("product-name");
  carSpan.textContent = producto.productoNombre;

  carDiv.appendChild(carSpan);
  carTd.appendChild(carDiv);
  carTr.appendChild(carTd);

  const imagTd = document.createElement("td");
  const imagImag = document.createElement("img");
  imagImag.setAttribute("src", producto.imgSrc);
  imagImag.setAttribute("alt", "producto");

  imagTd.appendChild(imagImag);
  carTr.appendChild(imagTd);

  const inputTd = document.createElement("td");
  const carInput =document.createElement("input");
  carInput.classList.add("quantity-input");
  carInput.setAttribute("type","number" );
  carInput.setAttribute("value",producto.cantidad);
  carInput.setAttribute("min","1" );

  inputTd.appendChild(carInput);
  carTr.appendChild(inputTd);

  const totalTd =createElement("td");
  totalTd.classList.add("subtotal");
  totalTd.textContent = producto.productoPrecio;

  carTr.appendChild(totalTd);

  const tablaCarrito = document.getElementById("tablaCarrito");
  tablaCarrito.appendChild(carTr);

});

localStorage.setItem("carrito", JSON.stringify(carrito));


*/



