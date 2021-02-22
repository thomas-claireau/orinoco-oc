document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter-cart")

    if (!counter) return;

    let ids = JSON.parse(localStorage.getItem("ids"));

    if (!ids) ids = [];

    counter.innerText = ids.length;
})