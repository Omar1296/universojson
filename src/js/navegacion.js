window.addEventListener('load', function(){
    const btnMenu = document.querySelector('.hamburguesa');
    const menu = document.querySelector('.enlaces');
    const body = document.querySelector('body');

    btnMenu.addEventListener('click', function (e) { 
        menu.classList.toggle('menu');
     });
     
});