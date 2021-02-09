export default class ProductList extends HTMLElement {
    constructor() {
        super()
        this.url = "http://localhost:3000/api/cameras";
        const products = this.getProducts()

        console.log(products);
    }

    getProducts() {
        return fetch(this.url).then(res => res.json())
    }

    renderProduct(data) {
        return ``
    }
}