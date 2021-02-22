import {renderPrice} from "./functions.js";

const API_URL = "http://localhost:3000/api/cameras";

document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.getElementById("products-list");

    if (productsList) {
        fetch(API_URL).then(res => res.json()).then(data => {
            data.forEach((product, index) => {
                productsList.innerHTML += renderProduct(product, index)
            })
        })
            .catch((error) => rej(error));
    }

    function renderProduct(product, index) {
        return `
        <div class="product ${index % 2 ? 'right' : 'left'}">
            <div class="image">
                <img src="${product.imageUrl}" alt="">
            </div>
            <div class="infos">
                <div class="title">${product.name}</div>
                <div class="sizes">
                    ${product.lenses.map(lense => `<span>${lense}</span>`).join(', ')}
                </div>
                <div class="description">${product.description}</div>
                <div class="price">${renderPrice(product.price)}</div>
                <div class="actions">
                    <a href="product/?id=${product._id}" class="button">Voir ce produit</a>
                    <button class="button add-to-cart">
                        <svg-file file="./assets/img/shopping-cart.svg"></svg-file>
                    </button> 
                </div>
            </div>
        </div>
        `
    }
})