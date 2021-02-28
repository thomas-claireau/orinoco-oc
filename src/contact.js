export default class Contact {
    constructor(formData) {
        if (formData instanceof FormData) {
            for (const item of formData.entries()) {
                this[item[0]] = item[1]
            }
        }
    }
}