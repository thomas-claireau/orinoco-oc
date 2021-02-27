document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter-cart")

    if (!counter) return;

    const ids = JSON.parse(localStorage.getItem("ids")) || [];

    counter.innerText = String(ids.length);
})