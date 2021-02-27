import {group} from "./functions.js";

export default class Cart {
    constructor() {
        this.ids = JSON.parse(localStorage.getItem("ids")) || []
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

    delete(id, decrement = false) {
        if (decrement) {
            this.ids.splice(this.ids.findIndex(item => item === id), 1)
        } else {
            this.ids = this.ids.filter(item => item !== id)
        }

        this.updateState()
    }

    updateState() {
        if (this.ids.length === 0) {
            localStorage.clear()
        } else {
            localStorage.setItem('ids', JSON.stringify(this.ids))
        }
    }

    renderCart() {
        return group(this.ids)
    }
}