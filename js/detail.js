document.addEventListener('DOMContentLoaded', () => {
    const detailPage = document.getElementById('detail');
    let detailRow = document.getElementById('product-info-div');
    let iframe = document.getElementById('rotationframe');
    // obtenemos el id del url
    const urlParams = new URLSearchParams(window.location.search);
    const idUrl = urlParams.get('id');

    var prodsArray = [];
    if (detailPage && idUrl) {
        initDetail(idUrl);
    } else {
        initDetail(1);
    }

    function initDetail(id) {
        let arregloArray;
        // traemos con fetch la data del producto
        const productosArray = getProductsArray().then(data => {
            //obtenemos la data de ese producto
            arregloArray = getProductData(data, id);
        });
        //const dataProd = getProductData(prodsArray, id);


        //rellenamos el html con la data del producto

    }

    async function getProductsArray() {
        let prods = await fetch("../products.json")
            .then(data => {
                return data.json();
            }).then(prods => {
                //prodsArray = prods;
                return prods;
            });
        return prods;
    }

    function getProductData(arreglo, idUrl) {
        let productoDataFull;
        arreglo.forEach(producto => {
            if (producto.id == idUrl) {
                productoDataFull = producto;
            }
        });
        construirProducto(productoDataFull);
    }

    function construirProducto(producto) {

        let prodDatos = {
            nombre: producto.name,
            precio: producto.price,
            imgSmall: producto.smallImg,
            imgBig: producto.bigImg,
            colors: producto.colors,
            sizes: producto.sizes,
        };
        crearHtmlDetail(prodDatos);
    }

    function crearHtmlDetail(productoDatos) {
        let colorsHtml = '<option selected>Select</option>';
        let sizesHtml = '<option selected>Select</option>';
        productoDatos.colors.forEach(color => {
            colorsHtml += '<option value="' + color + '">' + color + '</option>';
        });
        productoDatos.sizes.forEach(talla => {
            sizesHtml += '<option value="' + talla + '">' + talla + '</option>';
        });

        // crear el html de detalle
        let htmlDetalleProd = `
        <div class="breadcrumbs">
                            <span>Shop / </span><span class="bc-prod-name">${productoDatos.nombre}</span>
                        </div>
                        <div class="prod-2-cols">
                            <div class="prod-zoom-img">
                                <img src="${productoDatos.imgSmall}" alt="" data-zoom-image="${productoDatos.imgBig}" id="zoom">
                            </div>
                            <div class="prod-data">
                                <div class="prod-header">
                                    <div class="name-prod-head">
                                        ${productoDatos.nombre}
                                    </div>
                                    <div class="price-prod-head">
                                        <span>$ </span><span> ${productoDatos.precio}.00</span><span> USD</span>
                                    </div>
                                </div>
                                <div class="prod-form-cont">
                                    <div class="form-group-row">
                                        <label for="">Choose a color</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01">
                                              ${colorsHtml}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group-row row-inputs">
                                        <div class="input-size-div input-group">
                                            <label for="">Size</label>
                                            <select class="form-control">
                                                ${sizesHtml}
                                              </select>
                                        </div>
                                        <div class="input-qty-div">
                                            <label for="">Quantity</label>
                                            <input type="text" placeholder="1">
                                        </div>
                                    </div>
                                    <p>Get 10% off with a coupon</p>
                                </div>
                                <div class="prod-button-cont">
                                    <a href="#">Order now</a>
                                </div>
                            </div>
                        </div>
                        <!--2 cols-->
        `;
        let arrayIframes = ['https://spinzam.com/shot/embed/?idx=169747', 'https://spinzam.com/shot/embed/?idx=163213', 'https://spinzam.com/shot/embed/?idx=31309'];
        let randomNum = randomInt(0, 2);
        iframe.src = arrayIframes[randomNum];
        //console.log(randomNum);
        detailRow.insertAdjacentHTML('afterbegin', htmlDetalleProd);
    }

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});