class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stifness:0.04
        }
        this.body = Constraint.create(options)
        World.add(world,this.body)
}
display(){
    line(bodyA.position.x,bodyA.position.y,bodyB.position.x,bodyB.position.y)
}
}