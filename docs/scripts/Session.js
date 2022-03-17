import Camera from "./lib/Camera.js"
import canvas from "./lib/Canvas.js"
import Dino from "./objects/Dino.js"
import GameObject from "./objects/GameObject.js"
import Obstacle from "./objects/Obstacle.js"
import Tileable from "./objects/Tileable.js"
import input from "./lib/Input.js"

class Session {
    constructor() {
        this.initialize()
    }

    initialize() {
        this.score = 0
        this.camera = new Camera()
        this.speed = 9
        this.a = 0.05
        this.tick = 0

        this.obstacles = []
        this.dino = new Dino(100)
        this.exit = false

        this.bg = new Tileable("mountain", 0, 0, canvas.width, canvas.height, 0.1)
        this.clouds = new Tileable("clouds", 0, 500, canvas.width, canvas.height, 0.12)
        this.path = new Tileable("forest", 0, -100, canvas.width, canvas.height, 1)
    }

    draw() {
        this.bg.draw(this.camera)
        this.clouds.draw(this.camera)
        this.path.draw(this.camera)

        this.dino.draw(this.camera)

        this.obstacles.forEach(e => e.draw(this.camera))
    }

    update() {

        document.getElementById("score").innerHTML = this.score;

        if (this.dino.isAlive) {
            console.log(this.speed, this.a)
            this.tick++
            this.speed += this.a
            this.a *= 0.99


            this.obstacles = this.obstacles.filter(o => o.x > this.camera.x - 400)

            if (this.tick % 75 == 0) {
                this.obstacles.push(new Obstacle(this.camera.x + canvas.width, Math.round(Math.random())))
                this.score++
            }

            this.camera.x = this.dino.x - 100

            if (input.upKey) {
                this.dino.jump()
            }

            if (input.downKey) {
                this.dino.crouch()
            }

            this.dino.update(this.speed)

            this.obstacles.forEach(o => {
                if (this.dino.checkCollision(o)) this.dino.isAlive = false
            })
        }
        
    }
}

export default Session