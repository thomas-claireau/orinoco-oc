import Cart from "./cart.js";
import {renderPrice, renderPriceByQty} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsCart = document.getElementById("products-cart")

    if (!productsCart) return

    const API_URL = "http://localhost:3000/api/cameras";

    const cart = new Cart()
    const ids = cart.renderCart()

    Object.keys(ids).forEach((id, index) => {
        fetch(API_URL + "/" + id).then(res => res.json()).then(data => {
            productsCart.innerHTML += renderProduct(data, ids[id]);
        })
    })

    // attendre l'insertion des produits dans le DOM
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            
        }
    }
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
                <div class="close">
                    <svg-file file="../assets/img/cancel.svg"></svg-file>
                </div>
            </div>
            <div class="bottom">
                <div class="qty">
                    <span class="minus"></span>
                    <span class="value">${qty}</span>
                    <span class="plus"></span>
                    <input type="hidden" name="qty" value="${qty}">
                </div>
                <div class="price">
                    <div>Prix unitaire : <strong>${unitPrice}</strong></div>
                    <div>Prix total : <strong>${price}</strong></div>
                </div>
            </div>
        </div>
    </div>
    `
}