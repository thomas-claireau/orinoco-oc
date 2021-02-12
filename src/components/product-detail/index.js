import {$_GET, renderPrice} from '../../functions.js'

export default class ProductDetail extends HTMLElement {
    constructor() {
        super();
        this.id = $_GET('id');
        this.url = `http://localhost:3000/api/cameras/${this.id}`;
    }

    connectedCallback() {
        this.getModel();
    }

    getModel() {
        return new Promise((res, rej) => {
            fetch(this.url).then(res => res.json()).then(data => {
                this.renderProduct(data)
                res();
            })
                .catch((error) => rej(error));
        })
    }

    renderProduct(data) {
        this.innerHTML = `
        <section class="product-detail container">
            <div class="product">
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
                        <button class="button add-to-cart" data-id="${data._id}">
                            Ajouter au panier <svg-file file="../assets/img/shopping-cart.svg"></svg-file>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}