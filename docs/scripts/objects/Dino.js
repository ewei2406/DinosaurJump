import images from "../lib/Images.js";
import GameObject from "./GameObject.js";
import canvas from "../lib/Canvas.js";

class Dino extends GameObject {
    constructor(distance) {
        super("dino", distance, 0, 200, 200)
        this.dead = images.getImage("deaddino")
        this.isAlive = true
        this.vy = 0
        this.ay = -1;
        this.maxh = this.h
    }

    update(dx) {
        this.x += dx
        this.vy += this.ay
        this.y = Math.max(0, this.y + this.vy)

        this.h = this.isCrouch ? this.maxh / 2 : this.maxh

        this.ay = -1;
        this.isCrouch = false
    }

    draw(camera) {
        canvas.drawImage(this.isAlive ? this.img : this.dead, this.x - camera.x, this.y - camera.y, this.w, this.h)
    }
    
    jump() {
        if (!this.isCrouch && this.y <= 0) this.vy = 22
    }

    crouch() {
        this.isCrouch = true
        this.ay = -2
    }
}

export default Dino