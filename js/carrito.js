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

let total = 0; // Variable para almacenar el total de la compra

const tablaCarrito = document.getElementById("tablaCarrito");
const mensajeSinProductos = document.createElement("div");
mensajeSinProductos.id = "mensajeSinProductos";
tablaCarrito.appendChild(mensajeSinProductos);

function mostrarMensajeSinProductos() {
  if (carrito.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Aún no se ha añadido ningún producto.";
    mensajeSinProductos.appendChild(mensaje);
  }
}

mostrarMensajeSinProductos(); // Llamada a la función antes del bucle forEach

carrito.forEach((producto, index) => {
  const carTr = document.createElement("tr");

  const imagTd = document.createElement("td");
  const imagImag = document.createElement("img");
  imagImag.classList.add("imagImagP");
  imagImag.setAttribute("src", producto.imgSrc);
  imagImag.setAttribute("alt", "producto");
  imagTd.appendChild(imagImag);
  carTr.appendChild(imagTd);

  const carTd = document.createElement("td");
  const carDiv = document.createElement("div");
  carDiv.classList.add("product-info");
  const carSpan = document.createElement("span");
  carSpan.classList.add("product-name");
  carSpan.textContent = producto.productoNombre;
  carDiv.appendChild(carSpan);
  carTd.appendChild(carDiv);
  carTr.appendChild(carTd);

  const totalTd = document.createElement("td");
  totalTd.classList.add("subtotal");
  totalTd.textContent = producto.productoPrecio;
  carTr.appendChild(totalTd);

  tablaCarrito.appendChild(carTr);

  total += producto.productoPrecio; // Sumar el precio de cada producto al total
});

// Mostrar el total debajo de la tabla
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");
totalCell.setAttribute("colspan", "2");
totalCell.textContent = "Total: " + total;
totalRow.appendChild(totalCell);

const buttonTd = document.createElement("td");
const comprarButton = document.createElement("button");
comprarButton.classList.add("comprar-button");
comprarButton.textContent = "Comprar";

const cancelarButton = document.createElement("button");
cancelarButton.classList.add("cancelar-button");
cancelarButton.textContent = "Cancelar compra";

buttonTd.appendChild(comprarButton);
buttonTd.appendChild(cancelarButton);
totalRow.appendChild(buttonTd);

tablaCarrito.appendChild(totalRow);

// Evento click del botón "Comprar"
comprarButton.addEventListener("click", () => {
  if (carrito.length > 0) {
    Swal.fire({
      title: '¡Compra confirmada!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    }).then(() => {
      // Actualizar la tabla para mostrar la compra realizada
      tablaCarrito.innerHTML = '';

      const mensajeCompraRealizada = document.createElement("tr");
      const mensajeCompraCelda = document.createElement("td");
      mensajeCompraCelda.setAttribute("colspan", "3");
      mensajeCompraCelda.classList.add("mensaje-compra");
      mensajeCompraCelda.textContent = "¡Compra realizada!";
      mensajeCompraRealizada.appendChild(mensajeCompraCelda);
      tablaCarrito.appendChild(mensajeCompraRealizada);

      // Vaciar el carrito
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Mostrar mensaje de productos vacíos
      mostrarMensajeSinProductos();
    });
  }
});

// Evento click del botón "Cancelar compra"
cancelarButton.addEventListener("click", () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará todos los productos del carrito.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cancelar compra',
    cancelButtonText: 'No, mantener productos'
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar todos los productos del carrito
      carrito = [];

      // Vaciar la tabla
      tablaCarrito.innerHTML = '';

      // Actualizar el almacenamiento local
      localStorage.setItem("carrito", JSON.stringify(carrito));

      Swal.fire(
        'Compra cancelada',
        'Se han eliminado los productos del carrito.',
        'success'
      );

      // Mostrar mensaje de productos vacíos
      mostrarMensajeSinProductos();
    }
  });
});

// Función para mostrar mensaje de productos vacíos
function mostrarMensajeSinProductos() {
  if (carrito.length === 0) {
    mensajeSinProductos.innerHTML = ""; // Limpiar el contenido anterior
    const mensaje = document.createElement("p");
    mensaje.textContent = "Aún no se ha añadido ningún producto.";
    mensajeSinProductos.appendChild(mensaje);
  }
}

// Comprobar si hay productos en el carrito al cargar la página
mostrarMensajeSinProductos();


