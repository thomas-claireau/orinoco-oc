export default class DateFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = new Date().getFullYear()
    }
}