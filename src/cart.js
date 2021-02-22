export default class Cart {
    constructor() {
        this.ids = JSON.parse(localStorage.getItem("ids"))

        if (!this.ids) this.ids = []
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
    }

    renderCart() {
        const groupIds = this.group(this.ids)

        console.log(groupIds);
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