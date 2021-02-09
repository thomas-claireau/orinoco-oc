export default class SvgFile extends HTMLElement {
    constructor() {
        super();
        fetch(this.getAttribute("file")).then(res => res.text()).then(data => {
            this.innerHTML = data
        })
    }
}