// obtener productos del local storage

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito);


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


//generacion de carrito


//generacion de carrito


carrito.forEach((producto, index) => {
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
  imagImag.classList.add("imagImagP");
  imagImag.setAttribute("src", producto.imgSrc);
  imagImag.setAttribute("alt", "producto");

  imagTd.appendChild(imagImag);
  carTr.appendChild(imagTd);

  const inputTd = document.createElement("td");
  const carInput = document.createElement("input");
  carInput.classList.add("quantity-input");
  carInput.setAttribute("type", "number");
  carInput.setAttribute("value", producto.cantidad);
  carInput.setAttribute("min", "1");

  inputTd.appendChild(carInput);
  carTr.appendChild(inputTd);

  const totalTd = document.createElement("td");
  totalTd.classList.add("subtotal");
  totalTd.textContent = producto.productoPrecio;

  carTr.appendChild(totalTd);

  const buttonTd = document.createElement("td");
  const comprarButton = document.createElement("button");
  comprarButton.classList.add("comprar-button");
  comprarButton.textContent = "Comprar";

  const cancelarButton = document.createElement("button");
  cancelarButton.classList.add("cancelar-button");
  cancelarButton.textContent = "Cancelar compra";

  buttonTd.appendChild(comprarButton);
  buttonTd.appendChild(cancelarButton);
  carTr.appendChild(buttonTd);

  const tablaCarrito = document.getElementById("tablaCarrito");
  tablaCarrito.appendChild(carTr);

  comprarButton.addEventListener("click", () => {
      Swal.fire(
        '¡Compra confirmada!',
        '¡Gracias por su compra!',
      
      );
    });

  cancelarButton.addEventListener("click", () => {
    // Eliminar el producto del arreglo carrito
    carrito.splice(index, 1);

    // Eliminar la fila de la tabla
    carTr.remove();

    // Actualizar el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});

localStorage.setItem("carrito", JSON.stringify(carrito));