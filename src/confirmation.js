import {$_GET} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
    const pageConfirmation = document.querySelector('body.page-confirmation')

    if (!pageConfirmation) return;

    /**
     * Récupérer :
     * user : firstname, lastname
     * prix total
     * identifiant de commande
     */

    const firstNameHtml = document.querySelector("span.first-name")
    const totalPriceHtml = document.querySelector("span.total-price")
    const idOrderHtml = document.querySelector("span.id-order")

    if (firstNameHtml && totalPriceHtml && idOrderHtml) {
        firstNameHtml.textContent = $_GET("firstName")
        totalPriceHtml.textContent = $_GET("totalPrice")
        idOrderHtml.textContent = $_GET("idOrder")
    }
})