const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

   
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './src/Burger_menu_icon.png'){
        e.target.setAttribute('src','./src/Burger_menu_icon.png');
    }else{
        e.target.setAttribute('src','./src/Burger_menu_icon.png');
    }
});