export function resizedImageUrl(url, width, height, fit) {
    return `/.netlify/images?url=/${url}&fit=${fit}&w=${width}&h=${height}`
}