import DateFooter from "./components/date-footer";
import ProductList from "./components/products-list";
import SvgFile from "./components/svg-file";
import ProductDetail from "./components/product-detail";
import Cart from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("date-footer", DateFooter)
    customElements.define("products-list", ProductList)
    customElements.define("svg-file", SvgFile)
    customElements.define('product-detail', ProductDetail)

    const header = document.querySelector('header')

    const cart = new Cart();
    cart.create(1);
    cart.create(4);
    // cart.create("7");
    // cart.delete(4);
    cart.delete(1);
    // cart.delete(∂7);

    console.log(cart)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove('scrolled')
        }
    })
})