import GameObject from "./GameObject.js";

class Obstacle extends GameObject {
    constructor(distance, height) {
        super(
            height == 0 ? "cactus" : "plane", 
            distance, 
            height == 0 ? 0 : 120, // Y
            height == 0 ? 75 : 250, // Width
            height == 0 ? 125 : 150 // Height
        )
    }
}

export default Obstacle