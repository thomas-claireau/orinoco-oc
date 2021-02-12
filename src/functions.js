export function renderPrice(price) {
    return `${price / 100} €`;
}

export function $_GET(param) {
    const url = new URL(window.location.href);

    return url.searchParams.get(param);
}