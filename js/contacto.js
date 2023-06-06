
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






const contactForm = document.getElementById('contact-form');

// Agregar un evento de escucha para el envío del formulario
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Mostrar una alerta utilizando la librería SweetAlert2
  Swal.fire({
    title: '¡mensaje enviado!',
    text: 'Gracias por contactarnos. Te responderemos pronto.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    // Restablecer el formulario después de mostrar la alerta
    contactForm.reset();
  });
});