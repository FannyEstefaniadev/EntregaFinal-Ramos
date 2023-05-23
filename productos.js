
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


const productos = [
    {
      imgSrc: "img2moda/moda1.jpg",
      productoNombre: "Producto 1",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2500,
      id: 1,
    },
    {
      imgSrc: "img2moda/moda2.jpg",
      productoNombre: "Producto 2",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2300,
      id: 2,
    },
    {
      imgSrc: "img2moda/moda3.jpg",
      productoNombre: "Producto 3",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2400,
      id: 3,
    },
    {
      imgSrc: "img2moda/moda4.jpg",
      productoNombre: "Producto 4",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2790,
      id: 4,
    },
    {
      imgSrc: "img2moda/moda5.jpeg",
      productoNombre: "Producto 5",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2620,
      id: 5,
    },
    {
      imgSrc: "img2moda/moda6.jpg",
      productoNombre: "Producto 6",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2070,
      id: 6,
    },
    {
      imgSrc: "img2moda/moda7.jpg",
      productoNombre: "Producto 7",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2129,
      id: 7,
    },
    {
      imgSrc: "img2moda/moda8.webp",
      productoNombre: "Producto 8",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2460,
      id: 8,
    },
    {
      imgSrc: "img2moda/moda9.jpg",
      productoNombre: "Producto 9",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2209,
      id: 9,
    },
    {
      imgSrc: "img2moda/moda10.jpg",
      productoNombre: "Producto 9",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2080,
      id: 10,
    },
    {
      imgSrc: "img2moda/moda11.jpeg",
      productoNombre: "Producto 9",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2600,
      id: 11,
    },
    {
      imgSrc: "img2moda/moda12.jpg",
      productoNombre: "Producto 10",
      productoDescripcion: "AnimalCute",
      productoPrecio: 2500,
      id: 12,
    }
  ];
  
  
//generacion de carrito

let carrito = []


carrito.forEach(producto => {
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