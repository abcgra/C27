class Rope{
    constructor(bodyA, bodyB){
var option = {
    bodyA: bodyA,
    bodyB: bodyB,
    length:10,
    stiffness:0.04
}
this.constraint=Constraint.create(option)
World.add(world,this.constraint)
    }
    display(){
var pointA = this.constraint.bodyA.position
var pointB = this.constraint.bodyB.position
line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
}