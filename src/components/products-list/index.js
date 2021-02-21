import {renderPrice} from "../../functions.js"

export default class ProductList extends HTMLElement {
    constructor() {
        super()
        this.url = "http://localhost:3000/api/cameras";
    }

    connectedCallback() {
        this.getModel();
    }

    getModel() {
        return new Promise((res, rej) => {
            fetch(this.url).then(res => res.json()).then(data => {
                this.renderProducts(data)
                res();
            })
                .catch((error) => rej(error));
        })
    }

    renderProducts(data) {
        this.innerHTML = `
        <div class="products-list container">
            ${data.map((product, index) => this.renderProduct(index, product)).join('')}
        </div>
        `
    }

    renderProduct(index, data) {
        return `
        <div class="product ${index % 2 ? 'right' : 'left'}">
            <div class="image">
                <img src="${data.imageUrl}" alt="">
            </div>
            <div class="infos">
                <div class="title">${data.name}</div>
                <div class="sizes">
                    ${data.lenses.map(lense => `<span>${lense}</span>`).join(', ')}
                </div>
                <div class="description">${data.description}</div>
                <div class="price">${renderPrice(data.price)}</div>
                <div class="actions">
                    <a href="product/?id=${data._id}" class="button">Voir ce produit</a>
                    <add-to-cart id="${data._id}" svg-file="./assets/img/shopping-cart.svg" no-text="1"></add-to-cart>
                </div>
            </div>
        </div>
        `
    }
}