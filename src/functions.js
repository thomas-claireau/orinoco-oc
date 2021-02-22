export function renderPrice(price) {
    return `${price / 100} €`;
}

export function renderPriceByQty(price, qty) {
    return `${(price * qty) / 100} €`;
}

export function $_GET(param) {
    const url = new URL(window.location.href);

    return url.searchParams.get(param);
}

export function group(array) {
    if (!array) return false;

    return array.reduce(function (prev, item) {
        if (item in prev) prev[item]++;
        else prev[item] = 1;
        return prev;
    }, {});
}