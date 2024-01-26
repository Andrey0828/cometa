class Buble {
    constructor(obj) {
        this.ball = document.querySelector(obj.ball)
        this.x = this.y = 0
        this.speed = .01
        this.positions = []
        window.addEventListener('mousemove', (event) => {this.moveItem(event)})
    }

    moveItem(e) {
        // шарик
        this.x += (e.clientX - this.x) * this.speed
        this.y += (e.clientY - this.y) * this.speed
        this.ball.style = `position: absolute; left: ${this.x}px; top: ${this.y}px;`

        // комета
        this.positions.unshift({x: e.clientX, y: e.clientY})
        if (this.positions.length > 10) {
            this.positions.pop()
        }
        this.positions.forEach(pos => {
            let cometa = document.createElement('div')
            cometa.className = 'cometa'
            cometa.style = `border-radius: 50%;
                            background-color: orange;
                            width: 20px;
                            height: 20px;
                            position: absolute;
                            left: ${pos.x}px;
                            top: ${pos.y}px;`
            document.body.appendChild(cometa)
            setTimeout(() => {
                document.body.removeChild(cometa)
            }, 500)
        })
    }
}


const buble = new Buble({
    ball: '.buble'
})