import DateFooter from "./components/date-footer";
import ProductList from "./components/products-list";
import SvgFile from "./components/svg-file";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("date-footer", DateFooter)
    customElements.define("products-list", ProductList)
    customElements.define("svg-file", SvgFile)

    const header = document.querySelector('header')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove('scrolled')
        }
    })
})