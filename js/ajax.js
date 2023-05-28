
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


//tabla json-datos

//console.log('correcto');

document.querySelector('#botonj').addEventListener('click', traerDatos());

function traerDatos(){

//console.log('dentro de la funcion');   

const xhttp = new XMLHttpRequest();

xhttp.open('GET', '../json/datos.json',true);

xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        //console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
      //  console.log(datos);

      let res = document.querySelector('#res');
        res.innerHTML = '';


        for(let item of datos){
           // console.log(item.productos);
           res.innerHTML+=`
           <tr>
           <td>${item.productos}</td>
           <td>${item.marca}</td>
           <td>${item.precio}</td>
           <td>${item.id}</td>
         </tr>
           
           `
         
                }

    }
}


}