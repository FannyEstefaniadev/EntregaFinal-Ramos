
//menu
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito);
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

fetch("../json/carrito.json")
.then((resp)=> resp.json())
.then((data1) => {
carrito = [data1]


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

  const totalTd = document.createElement("td");
  totalTd.classList.add("subtotal");
  totalTd.textContent = producto.productoPrecio;

  carTr.appendChild(totalTd);

  const tablaCarrito = document.getElementById("tablaCarrito");
  tablaCarrito.appendChild(carTr);

});

localStorage.setItem("carrito", JSON.stringify(carrito));


});

