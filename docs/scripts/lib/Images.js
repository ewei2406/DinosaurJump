class Images {
    constructor() {
        this.images = {}
    }

    addImage(name, url) {
        const img = new Image
        img.src = url
        this.images[name] = img
    }

    getImage(name) {
        return this.images[name]
    }
}

const images = new Images()
images.addImage("dino", "/assets/dino.jpg")
images.addImage("plains", "/assets/plains.png")
images.addImage("cactus", "/assets/cactus.png")
images.addImage("plane", "/assets/plane.png")
images.addImage("forest", "/assets/forest.png")
images.addImage("mountain", "/assets/mountains.jpg")
images.addImage("clouds", "/assets/clouds.png")
images.addImage("deaddino", "/assets/deaddino.jpg")

export default images