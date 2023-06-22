const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball; // adicionar
var btn1; // adicionar
var btn2; // adicionar

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  btn1 = createImg('right.png'); // adicionar
  btn1.position(220,30); // adicionar
  btn1.size(50,50); // adicionar
  btn1.mouseClicked(hForce); // adicionar
  btn2 = createImg('up.png'); // adicionar
  btn2.position(20,30); // adicionar
  btn2.size(50,50); // adicionar
  btn2.mouseClicked(vForce); // adicionar
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options = { // adicionar
    restitution: 0.95 // adicionar
  } // adicionar
  ball = Bodies.circle(200,100,20,ball_options); // adicionar
  World.add(world,ball); // adicionar
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);  // adicionar

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function hForce()  // adicionar
{ // adicionar
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); // adicionar
} // adicionar
function vForce() // adicionar
{ // adicionar
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); // adicionar
} // adicionar
