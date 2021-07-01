const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var  slingshot;

function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.3);
    engine = Engine.create();
    world = engine.world;

    // let canvasmouse = Mouse.create(canvas.elt);
    // canvasmouse.pixelRatio = pixelDensity();
    // let options = {
    // mouse = canvasmouse
    // }
    // mConstraint = MouseConstraint.create(engine,options);
    // World.add(world,mConstraint);

    pendu1 = new pendu(200,350,"cyan");
    pendu2 = new pendu(260,350,"cyan");
    pendu3 = new pendu(320,350,"cyan");
    pendu4 = new pendu(380,350,"cyan");
    pendu5 = new pendu(440,350,"cyan");

     sling1 = new SlingShot(pendu1.body,{x : 200,y:100});
     sling2 = new SlingShot(pendu2.body,{x : 260,y:100});
     sling3 = new SlingShot(pendu3.body,{x : 320,y:100});
     sling4 = new SlingShot(pendu4.body,{x : 380,y:100});
     sling5 = new SlingShot(pendu5.body,{x : 440,y:100});
}

function draw(){

    background("black");
   
    
    Engine.update(engine);
    pendu1.display();
    pendu2.display();
    pendu3.display();
    pendu4.display();
    pendu5.display(); 
    sling1.display(); 
    sling2.display(); 
    sling3.display(); 
    sling4.display(); 
    sling5.display(); 

}

 function mouseDragged(){
   
         Matter.Body.setPosition(pendu1.body, {x: mouseX , y: mouseY});
       
 }

 