import {$_GET, renderPrice} from "./functions.js";

const API_URL = `http://localhost:3000/api/cameras/${$_GET('id')}`;

document.addEventListener("DOMContentLoaded", () => {
    const productDetail = document.getElementById("product-detail");

    if (productDetail) {
        fetch(API_URL).then(res => res.json()).then(data => renderProduct(data));
    }

    function renderProduct(product) {
        productDetail.innerHTML = `
        <div class="product">
                <div class="image">
                    <img src="${product.imageUrl}" alt="">
                </div>
                <div class="infos">
                    <div class="title">${product.name}</div>
                    <select class="sizes" name="sizes">
                        ${product.lenses.map(lense => `<option>${lense}</option>`).join(', ')}
                    </select>
                    <div class="description">${product.description}</div>
                    <div class="price">${renderPrice(product.price)}</div>
                    <div class="actions">
                        <button class="button add-to-cart" data-id="${product._id}">
                            Ajouter au panier
                            <svg-file file="/orinoco-oc/assets/img/shopping-cart.svg"></svg-file>
                        </button> 
                        <div class="form-field">
                            <label for="quantity">Quantité : </label>
                            <input type="number" name="quantity" value="1" min="1" max="99">
                        </div>
                    </div>
                </div>
            </div>
        `
    }
})
