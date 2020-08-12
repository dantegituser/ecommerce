document.addEventListener('DOMContentLoaded', () => {



    function addEventListeners() {
        var menuItems = document.querySelectorAll('header .navigation ul.menu-left');
        var megaMenu = document.querySelector('header #mega-menu');
        var cerrarMenu = document.querySelector('li.closeMegaMenu');
        var sliderLeftArrow = document.querySelector('.flechaizquierda');
        var sliderRightArrow = document.querySelector('.flechaderecha');
        var linkNavigation = document.querySelector('.megamenu-right');


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

        if (sliderLeftArrow) {
            sliderLeftArrow.addEventListener('click', () => {
                avanzarIzquierdaSlider();
            });
            sliderRightArrow.addEventListener('click', () => {
                avanzarDerechaSlider();
            });
        }

        linkNavigation.addEventListener('click', (e) => {
            e.preventDefault();
            let parentAnchor;
            if (e.target.classList.contains('link-img')) {
                parentAnchor = e.target.parentElement.parentElement;
            } else if (e.target.classList.contains('text-shoes')) {
                parentAnchor = e.target.parentElement;
            }
            const id = parentAnchor.getAttribute('data-id');
            verDetalleProducto(id);
        });
    }



    function verDetalleProducto(id) {
        window.location = `detail.html?id=${id}`;
    }



    addEventListeners();
    iniciarCart();
});