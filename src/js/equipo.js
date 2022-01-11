window.addEventListener('load', function(){
    let cambiar = 0;
    const informacion = document.querySelectorAll('.info-integrante');
    const circulos = document.querySelectorAll('.circulo');
    const imagen = document.querySelectorAll('.miembro-img');

    const contDouglas = document.querySelector('#Douglas'); 
    const contMark = document.querySelector('#Mark'); 
    const contVictor = document.querySelector('#Victor'); 
    const contAnousheh = document.querySelector('#Anousheh');
    
    const imagenDouglas = document.querySelector('#img-Douglas'); 
    const imagenMark = document.querySelector('#img-Mark'); 
    const imagenVictor = document.querySelector('#img-Victor'); 
    const imagenAnousheh = document.querySelector('#img-Anousheh');

    async function conectarBase(){
        try {
            const resultado = await fetch('../../data.json');
            const db = await resultado.json();

            const infoCrew = db.crew;

            for(let i = 0; i<infoCrew.length; i++){
                
                const{name, images, role, bio} = infoCrew[i];
                const cargoD = document.createElement('h4');
                const nombreD = document.createElement('h2');
                const bioD = document.createElement('p');

                switch(i){
                    //Douglas----------------------------------
                    case 0: 
                    cargoD.textContent = role;
                    contDouglas.appendChild(cargoD);
                    
                    nombreD.textContent = name;
                    contDouglas.appendChild(nombreD);
                    
                    bioD.classList.add('descripcion');
                    bioD.textContent = bio;
                    contDouglas.appendChild(bioD);

                    imagenDouglas.setAttribute('src', images.png);
                    break;

                    //Mark--------------------------------
                    case 1: 
                    cargoD.textContent = role;
                    contMark.appendChild(cargoD);

                    nombreD.textContent = name;
                    contMark.appendChild(nombreD);
                    
                    bioD.classList.add('descripcion');
                    bioD.textContent = bio;
                    contMark.appendChild(bioD);

                    imagenMark.setAttribute('src', images.png);
                    break;

                    //Victor----------------------------------
                    case 2: 
                    cargoD.textContent = role;
                    contVictor.appendChild(cargoD);
                    
                    nombreD.textContent = name;
                    contVictor.appendChild(nombreD);
                    
                    bioD.classList.add('descripcion');
                    bioD.textContent = bio;
                    contVictor.appendChild(bioD);

                    imagenVictor.setAttribute('src', images.png);
                    break;

                    //Anousheh------------------------------------
                    case 3: 
                    cargoD.textContent = role;
                    contAnousheh.appendChild(cargoD);
                    
                    nombreD.textContent = name;
                    contAnousheh.appendChild(nombreD);
                    
                    bioD.classList.add('descripcion');
                    bioD.textContent = bio;
                    contAnousheh.appendChild(bioD);

                    imagenAnousheh.setAttribute('src', images.png);
                    break;
                    
                    default: 
                        console.log('No se inserto el arreglo');
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    setInterval(function (param) { 
        
        if(informacion[cambiar].classList.contains('view')){
            informacion[cambiar].classList.remove('view');
            circulos[cambiar].classList.remove('circulo-activo');
            imagen[cambiar].classList.remove('imagen-view');
            if(cambiar<3){
                informacion[cambiar+1].classList.add('view');
                circulos[cambiar+1].classList.add('circulo-activo');
                imagen[cambiar+1].classList.add('imagen-view');
                cambiar++;
            }
            else{
                cambiar = 0;
                informacion[cambiar].classList.add('view');
                circulos[cambiar].classList.add('circulo-activo');
                imagen[cambiar].classList.add('imagen-view');
            }
        }


     }, 10000)

    conectarBase();
    
});