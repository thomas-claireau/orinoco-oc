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

    // attendre le chargement des éléments générés en JS
    const observer = new MutationObserver(function () {
        const qtySelectors = document.querySelectorAll('.selector-qty');

        if (qtySelectors.length) {
            qtySelectors.forEach(selector => {
                selector.addEventListener("click", updateQtyActions)
            })

            // remove from cart
            const crossProducts = document.querySelectorAll(".product .close");

            crossProducts.forEach(cross => {
                cross.addEventListener("click", removeFromCart)
            })
        }
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })

    /**
     * render product item inside DOM
     *
     * @param product
     * @param qty
     * @returns {string}
     */
    function renderProduct(product, qty) {
        const unitPrice = renderPrice(product.price)
        const price = renderPriceByQty(product.price, qty)

        return `
    <div class="product" data-id="${product._id}">
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
                    <div class="unit">Prix unitaire : <strong>${unitPrice}</strong></div>
                    <div class="total">Prix total : <strong>${price}</strong></div>
                </div>
            </div>
        </div>
    </div>
    `
    }

    /**
     * Controller for update cart
     *
     * Fire when minus or plus button are clicked
     *
     * @param event
     */
    function updateQtyActions(event) {
        if (cart instanceof Cart) {
            const elt = event.currentTarget;

            if (!elt) return;

            const product = elt.closest('.product');

            if (!product) return;

            const action = elt.classList[1];

            if (action == "minus" || action == "plus") {
                updateQty(product, action)
                updateCounterCart(action)
                updateTotalPrice(product, action)
            }
        }
    }

    /**
     * Update quantity inside product target
     *
     * @param product
     * @param action
     */
    function updateQty(product, action) {
        const qty = product.querySelector('.qty .value')
        const numberQty = Number(qty.innerText)

        if (action == "minus") {
            if (numberQty <= 1) {
                removeFromCart(product)
                return
            }

            qty.innerText = numberQty - 1;
        }

        if (action == "plus") {
            qty.innerText = numberQty + 1;
        }
    }

    /**
     * Update counter cart inside header element
     * @param action
     */
    function updateCounterCart(action) {
        const counterCart = document.getElementById("counter-cart")
        const numberCounterCart = Number(counterCart.innerText)

        if (action == "minus") {
            if (numberCounterCart <= 1) counterCart.remove()
            
            counterCart.innerText = numberCounterCart - 1
        }

        if (action == "plus") {
            counterCart.innerText = numberCounterCart + 1
        }
    }

    /**
     * Update total price inside product target
     * @param product
     * @param action
     */
    function updateTotalPrice(product, action) {
        const unitPrice = product.querySelector(".price .unit strong")
        const numberUnitPrice = Number(unitPrice.innerText.split(" ")[0])
        const totalPrice = product.querySelector(".price .total strong")
        const splitTotalPrice = totalPrice.innerText.split(' ')
        let numberTotalPrice = Number(splitTotalPrice[0])

        if (numberTotalPrice < numberUnitPrice) return;

        if (action == "plus") {
            splitTotalPrice[0] = numberTotalPrice + numberUnitPrice
        }

        if (action == "minus") {
            splitTotalPrice[0] = numberTotalPrice - numberUnitPrice
        }

        totalPrice.innerText = splitTotalPrice[0] + " " + splitTotalPrice[1]
    }

    /**
     * Remove product from cart and DOM when quantity is less than 1
     * @param product
     */
    function removeFromCart(product) {
        product.classList.add('remove');

        setTimeout(function () {
            product.remove()
        }, 300);
    }
})