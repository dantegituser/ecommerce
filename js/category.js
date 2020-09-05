document.addEventListener('DOMContentLoaded', () => {
    var prodsArray;
    const category = document.getElementById('category');

    if (category) {
        getProducts();
    }

    function createHtml(arreglo) {

        var prodCardHtml = '';
        arreglo.forEach(producto => {
            let estrellas, nuevo;
            // construimos estrellas y nuevo
            if (producto.new) {
                nuevo = `
                <div class="prod-card-new">
                    <span class="prod-card-new-span">New</span>
                </div>
                `;
            } else {
                nuevo = '';
            }
            // construimos cantidad de estrellas
            estrellas = starsConstruct(producto.stars);

            // construir el product card
            prodHtml = `
            <div class="prod-card">
                ${nuevo}
                <div class="product-card-image">
                    <img src="${producto.thumb1}" alt="">
                </div>
                ${estrellas}
                <div class="product-card-name">
                    ${producto.name}
                </div>
                <div class="product-card-price">
                    <span class="money-sign">$</span> <span class="precio-txt">${producto.price}</span><span> USD</span>
                </div>
                <div class="product-card-buttons">
                    <div class="prod-card-button-cart">
                        <a href="#" data-id="${producto.id}" class="add-to-cart">Add to cart</a>
                    </div>
                    <div class="prod-card-button-detail">
                    <a href="detail.html?id=${producto.id}" data-id="${producto.id}">See more</a>
                    </div>
                </div>
            </div>
            <!--prod card-->

            `;
            prodCardHtml += prodHtml;

        });
        // añadir a Pagina
        let galeryContainer = document.querySelector('.category-items');
        galeryContainer.insertAdjacentHTML('beforeend', prodCardHtml);
    }



    function starsConstruct(numeroEstrellas) {
        let starsHtml = '';
        starsHtml += '<div class="product-stars">';
        for (let i = 0; i < numeroEstrellas; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        starsHtml += '</div>';
        return starsHtml;

    }
    async function getProducts() {
        let prods = await fetch("./products.json")
            .then(data => {
                return data.json();
            }).then(prods => {
                prodsArray = prods;
                createHtml(prodsArray);
            });
    }

});