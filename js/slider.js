var paginaSlider = 1;
var sliderContenido = document.querySelectorAll('.slider-cont .prod-card');

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