var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions =[];
var score = 0;

var z = 10;
var d = 50;
var n = 75;
var a = 62;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, 650, 10, 300));
  }

  //create 1st row of plinko objects
  for (var i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      d = 50;
    }
    else {
      d = 75;
    }
    for (var j = d; j <= width; j = j + 50) {
      z = 8; 
      plinkos.push(new Plinko(j, n));
    }
    n = n + 100;
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if (frameCount % 60 === 0) {
    plinkos.push(new Plinko(400, -21));
    Matter.Body.setStatic(plinkos[a].body, false);
    a++;
  }

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    if (i < 63) {
      plinkos[i].display();
    }
    else if (i < 62) {
      push();
      fill(rgb(random(0,255),random(0,255),random(0,255)));
      plinkos[i].display();
      pop();
    }
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}
