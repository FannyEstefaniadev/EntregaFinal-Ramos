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
        Swal.fire({
          title: '¡Agregado en el carrito!',
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
        }).then((result) => {
          if (result.isConfirmed) {
            mostrarAlertaContinuarComprando();
          }
        });
      });
      
      function mostrarAlertaContinuarComprando() {
        Swal.fire({
          title: '¿Qué deseas hacer?',
          text: '¿Deseas seguir comprando o ir al carrito?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Seguir comprando',
          cancelButtonText: 'Ir al carrito',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Aquí puedes agregar el código para seguir comprando
            Swal.fire(
              'Seguir comprando',
              'Continúa explorando nuestros productos.',
              'info'
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = './html/carrito.html';
          }
        });
      }


      button.addEventListener("click", function () {

        agregarProducto(producto.imgSrc, producto.productoNombre, producto.productoDescripcion, producto.productoPrecio, producto.id)


      });

      product.appendChild(img);
      product.appendChild(description);
      product.appendChild(button);

      container.appendChild(product);
      contenedorProducto.appendChild(container);
    })


  }).catch(error => {
    console.log(error);
  })




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




