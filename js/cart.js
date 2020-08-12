function iniciarCart() {
    console.log('cargar desde local storage');
    console.log('cart niicado');
    readLocalStorage();
    // listeners
    const cartCont = document.querySelector('.cart-content .prod-detail');
    const linkAdd = document.querySelector('.category-items');
    const deleteAll = document.querySelector('.empty-cart');

    deleteAll.addEventListener('click', deleteAllItems);

    if (linkAdd) {
        linkAdd.addEventListener('click', addTocart);
    }


    //agregar al carrito
    function addTocart(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            const producto = e.target.parentElement.parentElement.parentElement;
            obtenerDatosProd(producto);
        }
    }

    function obtenerDatosProd(productoDiv) {
        const producto = {
            imagen: productoDiv.querySelector('img').src,
            nombre: productoDiv.querySelector('.product-card-name').innerText,
            precio: productoDiv.querySelector('.precio-txt').innerText,
            id: productoDiv.querySelector('a').getAttribute('data-id')
        };

        insertarEnHtml(producto);
    }

    function insertarEnHtml(datos) {
        const itemProdCart = `
        <div class="prod-detail" data-id="${datos.id}">
            <div class="img-cart">
                <img src="${datos.imagen}" alt="">
            </div>
            <div class="product-name">
                <div class="title">
                ${datos.nombre}
                </div>
                <div class="price">
                    $ ${datos.precio}
                </div>
            </div>
            <div class="boton-cart">
                <span><i class="fas fa-trash-alt delete-item-cart"></i></span>
            </div>
        </div>
        `;
        const insertarCart = document.querySelector('.cart-content .cart-container');
        insertarCart.insertAdjacentHTML('afterbegin', itemProdCart);
        const linkBorrarItem = document.querySelector('.cart-content');
        linkBorrarItem.addEventListener('click', borrarProd);
        agregarItemLs(datos);

    }

    // borrar del carrito
    function borrarProd(e) {
        e.preventDefault();
        let prodId, elemento;
        if (e.target.classList.contains('delete-item-cart')) {

            elemento = e.target.parentElement.parentElement.parentElement;
            prodId = elemento.getAttribute('data-id');
            e.target.parentElement.parentElement.parentElement.remove();
        }
        deleteProdFromLS(prodId);


    }

    // borrar prod del local storage
    function deleteProdFromLS(idprod) {
        let prodsLs;

        prodsLs = obtenerProdsLs();

        prodsLs.forEach(function(producto, index) {
            if (producto.id === idprod) {
                prodsLs.splice(index, 1);
            }
        });
        localStorage.setItem('carritoProds', JSON.stringify(prodsLs));


    }

    // agregar a local storage
    function agregarItemLs(dataprods) {
        //console.log(dataprods);
        let productosCart;

        productosCart = obtenerProdsLs();
        productosCart.push(dataprods);
        localStorage.setItem('carritoProds', JSON.stringify(productosCart));
    }

    // borrar de local storage

    // borrar todo
    function deleteAllItems(e) {
        e.preventDefault();
        const insertarCart = document.querySelector('.cart-content .cart-container');
        while (insertarCart.firstChild) {
            insertarCart.removeChild(insertarCart.firstChild);
        }
        // vaciamos localstorage
        emptyLs();
        return false;


    }

    //cargar local storage
    function obtenerProdsLs() {
        let prodsLs;

        if (localStorage.getItem('carritoProds') === null) {
            prodsLs = [];
        } else {
            prodsLs = JSON.parse(localStorage.getItem('carritoProds'));
        }
        return prodsLs;
    }

    // leer localstorage
    function readLocalStorage() {
        let prodsLs;

        prodsLs = obtenerProdsLs();
        prodsLs.forEach(datos => {
            const itemProdCart = `
        <div class="prod-detail" data-id="${datos.id}">
            <div class="img-cart">
                <img src="${datos.imagen}" alt="">
            </div>
            <div class="product-name">
                <div class="title">
                ${datos.nombre}
                </div>
                <div class="price">
                    $ ${datos.precio}
                </div>
            </div>
            <div class="boton-cart">
                <span><i class="fas fa-trash-alt delete-item-cart"></i></span>
            </div>
        </div>
        `;
            const insertarCart = document.querySelector('.cart-content .cart-container');
            insertarCart.insertAdjacentHTML('afterbegin', itemProdCart);
            const linkBorrarItem = document.querySelector('.cart-content');
            linkBorrarItem.addEventListener('click', borrarProd);
        });
    }
    //functions

    function emptyLs() {
        localStorage.clear();
    }


}