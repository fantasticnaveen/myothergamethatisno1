class Ground{
    constructor(x, y, w, h){
        this.ground = createSprite(x, y, w, h)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.x, this.ground.y, this.w, this.h)
        this.ground.x = mouseX
        this.ground.y = mouseY
    }
}