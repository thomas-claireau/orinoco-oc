import Cart from "./cart.js";
import {renderPrice, renderPriceByQty} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsCart = document.getElementById("products-cart")

    if (!productsCart) return

    const API_URL = "https://p5-orinoco-backend.herokuapp.com/api/cameras";

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
            // interaction qty
            const qtySelectors = document.querySelectorAll('.selector-qty');

            qtySelectors.forEach(selector => {
                selector.addEventListener("click", updateQty)
            })

            // remove from cart
            const crossProducts = document.querySelectorAll(".product .close");

            crossProducts.forEach(cross => {
                cross.addEventListener("click", removeFromCart)
            })
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
                    <span class="selector-qty minus"></span>
                    <span class="value">${qty}</span>
                    <span class="selector-qty plus"></span>
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

function updateQty(event) {
    console.log(event);
}

function removeFromCart(event) {
    console.log(event);
}