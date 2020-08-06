document.addEventListener('DOMContentLoaded', () => {

    var paginaSlider = 1;
    var sliderContenido = document.querySelectorAll('.slider-cont .prod-card');

    function addEventListeners() {
        var menuItems = document.querySelectorAll('header .navigation ul.menu-left');
        var megaMenu = document.querySelector('header #mega-menu');
        var cerrarMenu = document.querySelector('li.closeMegaMenu');
        var sliderLeftArrow = document.querySelector('.flechaizquierda');
        var sliderRightArrow = document.querySelector('.flechaderecha');

        //console.log(sliderContenido);

        menuItems.forEach(element => {
            element.addEventListener('mouseover', () => {
                menuVisible();
            });

        });

        megaMenu.addEventListener('mouseleave', () => {
            menuInvisible();
        });

        cerrarMenu.addEventListener('click', () => {
            menuInvisible();
        });
        //acciones click
        sliderLeftArrow.addEventListener('click', () => {
            avanzarIzquierdaSlider();
        });
        sliderRightArrow.addEventListener('click', () => {
            avanzarDerechaSlider();
        });
    }



    // funciones
    function avanzarIzquierdaSlider() {

        if (paginaSlider === 1) {
            return;
        } else {
            // avanza izquierda
            moverIzquierda();
            paginaSlider = 1;
        }
    }

    function avanzarDerechaSlider() {

        if (paginaSlider === 1) {
            // avanza derecha
            moverDerecha();
            paginaSlider = 2;
        } else {
            // no avanza
            return;
        }
    }

    function moverDerecha() {
        sliderContenido.forEach(elemento => {
            TweenMax.to(elemento, 1, { x: '-890px' });
        });
    }

    function moverIzquierda() {
        sliderContenido.forEach(elemento => {
            TweenMax.to(elemento, 1, { x: '0px' });
        });

    }

    function menuVisible() {
        TweenMax.to('#mega-menu', 0.5, { autoAlpha: 1 });
    }

    function menuInvisible() {
        TweenMax.to('#mega-menu', 0.5, { autoAlpha: 0 });
    }

    addEventListeners();
});