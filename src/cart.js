export default class Cart {

    constructor() {
        this.ids = []
        this.apiUrl = `http://localhost:3000/api/cameras/`;
    }

    create(id) {
        if (Number.isInteger(id)) this.ids.push(id)

        this.updateState()
    }

    read() {
        return this.ids.find(item => item === id)
    }

    delete(id) {
        this.ids = this.ids.filter(item => item !== id)

        this.updateState()
    }

    updateState() {
        if (this.ids.length === 0) {
            localStorage.clear()
        } else {
            localStorage.setItem('ids', this.ids)
        }
    }
}