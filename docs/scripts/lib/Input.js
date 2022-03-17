class Input {
    constructor() {
        this.downKey = false
        this.upKey = false
    }
}

const input = new Input()

document.addEventListener('keydown', e => {
    if (["Space", "KeyW", "ArrowUp"].includes(e.code)) {
        input.upKey = true
    } else if (["ShiftLeft", "KeyS", "ArrowDown"].includes(e.code)) {
        input.downKey = true
    }
});

document.addEventListener('keyup', e => {
    if (["Space", "KeyW", "ArrowUp"].includes(e.code)) {
        input.upKey = false
    } else if (["ShiftLeft", "KeyS", "ArrowDown"].includes(e.code)) {
        input.downKey = false
    }
});

export default input