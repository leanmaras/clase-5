export default class Video {
    constructor(path) {
        this.src = path;
    }

    render() {
        return `<video controls><source src=${this.src} type="video/mp4"></video>`
    }
}