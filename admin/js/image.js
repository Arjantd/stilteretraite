export function resizedImageUrl(url, dimensions, fit) {
    let uri = new URL(encodeURI(url));
    let fitString = fit ? `-${fit}` : '';
    return `${uri.protocol}//${uri.host}/${dimensions}${fitString}${uri.pathname}`;
}