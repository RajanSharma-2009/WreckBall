const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;

function setup() {
createCanvas(3000,800);
engine=Engine.create();
world=engine.world;
ground=new Ground(1500,800,3000,20);
ball=new Ball(200,200,80,80);
rope=new Rope(ball.body,{x:500,y:50})
block1=new Block(900,100,70,70)
block2=new Block(900,170,70,70)
block3=new Block(900,240,70,70)
block4=new Block(900,310,70,70)
block5=new Block(800,100,70,70)
block6=new Block(800,170,70,70)

}
function draw(){
background(180);
Engine.update(engine);
ground.display();
ball.display();
rope.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
}
function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})   
}