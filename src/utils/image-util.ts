function getImageURL(name: any) {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export {getImageURL};