export default class ProductsCart extends HTMLElement {
    constructor(s) {
        super();
        this.ids = this.group(JSON.parse(localStorage.getItem('ids')))
        this.products = []
        this.url = "http://localhost:3000/api/cameras";
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (!this.ids) {
            this.innerHTML = "Aucun produit ajouté au panier";
            return;
        }

        this.ids.forEach(id => {
            console.log(id);
            // fetch(this.url + "/" + id).then(res => res.json()).then(data => {
            //     if (data) this.innerHTML += data
            // })
        })
    }

    group(array) {
        if (!array) return false;

        return array.reduce(function (prev, item) {
            if (item in prev) prev[item]++;
            else prev[item] = 1;
            return prev;
        }, {});
    }
}