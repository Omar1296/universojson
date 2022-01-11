window.addEventListener('load', function () { 
    const botones = document.querySelectorAll('.elegir');

    const contVehiculo = document.querySelector('#vehicle');
    const imagenVehiculo = document.querySelector('#img-vehiculo');
    const contCapsula = document.querySelector('#capsule');
    const imagenCapsula = document.querySelector('#img-capsule');
    const contSpace = document.querySelector('#spaceport');
    const imagenSpace = document.querySelector('#img-spaceport');

    async function conectarDB(){
        try {
            const resultado = await fetch('../../data.json');
            const db = await resultado.json();    

            const infoTecnologia = db.technology;
            
            for(let i = 0; i<infoTecnologia.length; i++){

                const{name, images, description} = infoTecnologia[i];
                const nombre = document.createElement('h2')
                const parrafo = document.createElement('P');
                parrafo.classList.add('copy');

                switch(i){
                    case 0:
                    nombre.textContent = name;
                    contVehiculo.appendChild(nombre);

                    parrafo.textContent = description;
                    contVehiculo.appendChild(parrafo);

                    imagenVehiculo.setAttribute('src', images.portrait);

                    break;
                    
                    case 1:
                    nombre.textContent = name;
                    contSpace.appendChild(nombre);

                    parrafo.textContent = description;
                    contSpace.appendChild(parrafo);
                    
                    imagenSpace.setAttribute('src', images.portrait);
                    break;

                    case 2:
                    nombre.textContent = name;
                    contCapsula.appendChild(nombre);

                    parrafo.textContent = description;
                    contCapsula.appendChild(parrafo);

                    imagenCapsula.setAttribute('src', images.portrait);

                    break;
                    default:
                        console.log('Error de conexión');
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    botones[0].addEventListener('click', function(){
        quitarClase();
        botones[0].classList.add('btn-activo');
        contVehiculo.classList.add('ver');
        imagenVehiculo.classList.add('visual');
        
    });

    botones[1].addEventListener('click', function(){
        quitarClase();
        botones[1].classList.add('btn-activo');
        contSpace.classList.add('ver');
        imagenSpace.classList.add('visual');
        
    });

    botones[2].addEventListener('click', function(){
        quitarClase();
        botones[2].classList.add('btn-activo');
        contCapsula.classList.add('ver');
        imagenCapsula.classList.add('visual');
        
    });
        
    
    
    function quitarClase(){
        const btnActivo = document.querySelector('.btn-activo');
        btnActivo.classList.remove('btn-activo');

        const contActivo = document.querySelector('.ver');
        contActivo.classList.remove('ver');

        const imgActiva = document.querySelector('.visual');
        imgActiva.classList.remove('visual');
    }
    conectarDB();
})