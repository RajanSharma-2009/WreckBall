class Rope{
constructor(bodyA,pointB){
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
    }
this.rope=Matter.Constraint.create(options);
this.pointB=pointB;
World.add(world,this.rope)
}
display(){
var pointA=this.rope.bodyA.position;
var pointB=this.pointB
strokeWeight(3)
line(pointB.x,pointB.y,pointA.x,pointA.y)

}
}