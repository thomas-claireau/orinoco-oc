import "./products.js"
import "./product.js"
import SvgFile from "./svg-file.js";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define('svg-file', SvgFile);

    const header = document.querySelector('header')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove('scrolled')
        }
    })
})