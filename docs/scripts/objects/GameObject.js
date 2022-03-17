import canvas from "../lib/Canvas.js"
import images from "../lib/Images.js"

class GameObject {
    constructor(imageName, x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = images.getImage(imageName)
    }

    draw(camera) {
        canvas.drawImage(this.img, this.x - camera.x, this.y - camera.y, this.w, this.h)
    }

    checkCollision(other) {
        return this.x < (other.x + other.w) && (this.x + this.w) > other.x &&
            this.y < (other.y + other.h) && (this.y + this.h) > other.y
    }

    update() {

    }
}

export default GameObject