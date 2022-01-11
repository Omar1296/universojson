window.addEventListener('load', function(){
    //Definición de variables
const botonesdestino = document.querySelectorAll('.btn-destinos');
const contLuna = document.querySelector('.cont-luna');
 
//Imagen
const imagenObjeto = document.querySelector('#img-objeto');



mostrarDestinos();

botonesdestino.forEach(boton=>{
    let indice;
    boton.addEventListener('click', function(){
        if(boton.getAttribute('id') == 'luna'){
            indice = 0
        }
        else if(boton.getAttribute('id') == 'marte'){
            indice = 1
        }
        else if(boton.getAttribute('id') == 'europa'){
            indice = 2
        }
        else if(boton.getAttribute('id') == 'titan'){
            indice = 3
        }

        const btnActivo = document.querySelector('.activo');
        btnActivo.classList.remove('activo');

        boton.classList.add('activo');
        borrar();
        mostrarDestinos(indice);
    });
});

async function mostrarDestinos(indice = 0){
    try {
        const resultado = await fetch('../../data.json');
        const db = await resultado.json();

        const infoDestinos = db.destinations;

        const{name, description, distance, travel, images} = infoDestinos[indice];
            
        const titulo = document.createElement('H1');
        titulo.textContent = name;

        const pDescripcion = document.createElement('P');
        pDescripcion.textContent = description;
        pDescripcion.classList.add('texto');

        const linea = document.createElement('DIV');
        linea.classList.add('linea');

        const infoDistancia = document.createElement('H5');
        infoDistancia.textContent = distance;

        const infoVuelta = document.createElement('H5');
        infoVuelta.textContent = travel;

        imagenObjeto.setAttribute('src', images.png);

        //Crear los contenedores extras
        const contCaracteristicas = document.createElement('DIV');
        contCaracteristicas.classList.add('caracteristicas');

        //Titulos constantes
        const tDistancia = document.createElement('P');
        tDistancia.textContent = 'Avg. distance';
        const tVuelta = document.createElement('P');
        tVuelta.textContent = 'Est. travel time';

        const contDistancia = document.createElement('DIV');
        contDistancia.classList.add('distancia');
        contDistancia.appendChild(tDistancia);
        contDistancia.appendChild(infoDistancia);

        const contVuelta = document.createElement('DIV');
        contVuelta.classList.add('vuelta');
        contVuelta.appendChild(tVuelta);
        contVuelta.appendChild(infoVuelta);

        //Agregar los contenedores a caracteristicas
        contCaracteristicas.appendChild(contDistancia);
        contCaracteristicas.appendChild(contVuelta);

        contLuna.appendChild(titulo);
        contLuna.appendChild(pDescripcion);
        contLuna.appendChild(linea);
        contLuna.appendChild(contCaracteristicas);

        

    } catch (error) {
        console.log(error);
    }
}

function borrar(){
    const h1 = document.querySelector('.cont-luna h1');
    const texto = document.querySelector('.cont-luna .texto');
    const linea = document.querySelector('.cont-luna .linea');
    const caracteristicas = document.querySelector('.caracteristicas');
    contLuna.removeChild(h1);
    contLuna.removeChild(texto);
    contLuna.removeChild(linea);
    contLuna.removeChild(caracteristicas);
}

});