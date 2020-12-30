const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(330, 235, 30, 30);
}

function draw(){
    background("aqua");
    Engine.update(engine);
}