import "./products.js"
import "./products-cart.js"
import "./product.js"
import "./counter-cart.js"
import SvgFile from "./svg-file.js";
import Cart from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define('svg-file', SvgFile);

    // header scrolled
    const header = document.querySelector('header')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove('scrolled')
        }
    })

    // date sur footer
    const dateFooter = document.getElementById("date-footer")
    const now = new Date();
    dateFooter.innerText = now.getFullYear()
})

// add to cart : attendre le chargement des éléments générés en JS
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const btnsAtc = document.querySelectorAll('.add-to-cart')
        const counterCart = document.getElementById("counter-cart")

        if (!btnsAtc || !counterCart) return

        const cart = new Cart()

        btnsAtc.forEach(btn => {
            btn.addEventListener("click", () => {
                let qty = btn.parentElement.querySelector("input[name='quantity']");

                qty = qty ? Number(qty.value) : 1;

                cart.create(btn.dataset.id, qty);

                // update cart counter
                let qtyCounterCart = Number(counterCart.innerText);
                counterCart.innerText = qtyCounterCart + qty;
            })
        })
    }
}