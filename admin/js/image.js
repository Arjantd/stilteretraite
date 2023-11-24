export function resizedImageUrl(url, width, height, fit) {
    let uri = new URL(encodeURI(url));
    let fitString = fit ? `-${fit}` : '';
    return `/.netlify/images?url=/${url}&fit=${fit}&w=${width}&h=${height}`
}