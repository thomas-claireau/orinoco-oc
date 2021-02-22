import Cart from "./cart.js";
import {renderPrice, renderPriceByQty} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsCart = document.getElementById("products-cart")

    if (!productsCart) return

    const API_URL = "http://localhost:3000/api/cameras";

    const cart = new Cart()
    const ids = cart.renderCart()

    Object.keys(ids).forEach((id) => {
        fetch(API_URL + "/" + id).then(res => res.json()).then(data => {
            productsCart.innerHTML += renderProduct(data, ids[id]);
        })
    })
})

function renderProduct(product, qty) {
    const unitPrice = renderPrice(product.price)
    const price = renderPriceByQty(product.price, qty)

    return `
    <div class="product">
        <img src="${product.imageUrl}"/>
        <div class="infos">
            <div class="top">
                <h2>${product.name}</h2>
                <div class="close">cross</div>
            </div>
            <div class="bottom">
                <input type="number" value="${qty}">
                <div class="price">
                    <div>Prix unitaire : <strong>${unitPrice}</strong></div>
                    <div>Prix total : <strong>${price}</strong></div>
                </div>
            </div>
        </div>
    </div>
    `
}