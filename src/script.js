import DateFooter from "./components/date-footer";
import ProductList from "./components/products-list";
import SvgFile from "./components/svg-file";
import ProductDetail from "./components/product-detail";
import AddToCart from "./components/add-to-cart";
import ProductCart from "./components/product-cart";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("date-footer", DateFooter)
    customElements.define("products-list", ProductList)
    customElements.define("svg-file", SvgFile)
    customElements.define('product-detail', ProductDetail)
    customElements.define('add-to-cart', AddToCart)
    customElements.define('product-cart', ProductCart)

    const header = document.querySelector('header')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove('scrolled')
        }
    })
})