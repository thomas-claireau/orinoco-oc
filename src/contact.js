export default class Contact {
    constructor(formData) {
        this.errors = []

        if (formData instanceof FormData) {
            for (const item of formData.entries()) {
                const label = item[0]

                if (label === "email") {
                    this[label] = this.validateEmail(item[1])
                } else {
                    this[label] = this.validateString(item[1])
                }
            }
        }

        this.hasError()
    }

    hasError() {
        Object.keys(this).forEach(label => {
            console.log(label);
            console.log(this[label]);
        })
    }

    validateString(str) {
        const validation = /^[^\\\/&]*$/.test(String(str));

        return validation ? str : "";
    }

    validateEmail(str) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(String(str).toLowerCase()) ? str : "";
    }
}