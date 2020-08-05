document.addEventListener('DOMContentLoaded', () => {


    function addEventListeners() {
        var menuItems = document.querySelectorAll('header .navigation ul.menu-left');
        var megaMenu = document.querySelector('header #mega-menu');
        var cerrarMenu = document.querySelector('li.closeMegaMenu');

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
    }

    function menuVisible() {
        TweenMax.to('#mega-menu', 0.5, { autoAlpha: 1 });
    }

    function menuInvisible() {
        TweenMax.to('#mega-menu', 0.5, { autoAlpha: 0 });
    }

    addEventListeners();
});