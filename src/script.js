import DateFooter from "./components/date-footer";
import ProductList from "./components/products-list";

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("date-footer", DateFooter)
    customElements.define("products-list", ProductList)
})