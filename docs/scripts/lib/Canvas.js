class Canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.canvas.oncontextmenu = e => { e.preventDefault(); e.stopPropagation(); };
        this.canvas.width = 1200
        this.canvas.height = 800
        this.width = 1200
        this.height = 800
        this.ctx = this.canvas.getContext("2d");
    }

    drawImage(image, x, y, w, h) {
        // console.log(image, x, y, w, h)
        this.ctx.drawImage(image, x, canvas.height - y - h, w, h)
    }

    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, canvas.height - y - h, w, h)
    }

    clear() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

const canvas = new Canvas("gameDisplay")

export default canvas