export default class Cart extends HTMLElement {

    constructor(props) {
        super(props)
        this.ids = JSON.parse(localStorage.getItem("ids"));

        if (!this.ids) this.ids = []
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `<span class="product-cart">${this.ids.length}</span>`;

        const cart = document.createElement("product-cart")
        cart.innerHTML = this.innerHTML
    }

    create(id, qty = 1) {
        qty = Number(qty);

        if (Number.isInteger(qty)) {
            for (let i = 0; i < qty; i++) {
                this.ids.push(id)
            }
        }

        this.updateState()
    }

    delete(id) {
        this.ids = this.ids.filter(item => item !== id)

        this.updateState()
    }

    updateState() {
        if (this.ids.length === 0) {
            localStorage.clear()
        } else {
            localStorage.setItem('ids', JSON.stringify(this.ids))
        }

        this.render()
    }
}