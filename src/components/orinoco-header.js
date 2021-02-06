export default class OrinocoHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<header class="orinoco-header">
            <h1>Orinoco</h1>
            <div class="panier">Panier</div>
        </header>`
    }
}