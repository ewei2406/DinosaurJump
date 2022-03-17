import canvas from "../lib/Canvas.js";
import images from "../lib/Images.js";

class Tileable {
    constructor(imgname, x, y, w, h, rate) {
        this.img = images.getImage(imgname)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rate = rate
    }

    draw(camera) {
        canvas.drawImage(this.img, 
            -((camera.x * this.rate) % this.w), 
            this.y,
            this.w,
            this.h
            )
        canvas.drawImage(this.img,
            -(((camera.x * this.rate) % this.w) - this.w),
            this.y,
            this.w,
            this.h
        )
    }
}

export default Tileable