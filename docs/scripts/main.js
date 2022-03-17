import Session from "./Session.js";
import canvas from "./lib/Canvas.js";

const session = new Session()

const main = () => {
    if (!session.exit) {
        // update
        session.update()

        //draw
        canvas.clear()
        session.draw()
    // canvas.drawImage(images.getImage(""))
    }
    
}

setInterval(main, 1000 / 60)