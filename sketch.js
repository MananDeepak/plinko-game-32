const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles=[];
var plinkos=[];
var divisions=[];

var engine,world;
var ground;
var divisionHeight=300;
var score=0;
var particle;
var gameState="Play";
var turn=0;
 
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
    world = engine.world;

ground=new Ground (600,height-12,1200,20);

    for(var j=40;j<=width;j=j+50){

      plinkos.push(new Plinko(j,75));
    }
    
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    
    }
    for(var j=15;j<=width;j=j+50){
      plinkos.push(new Plinko(j,275));
    
    }
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,375));
    
    }

for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/7,10,divisionHeight));
}



}

function draw() {
  background("black");


  ground.display();
  
Engine.update(engine);

noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-550, 50)


text("500" , width-590,450)
text("500" , width-510,450)
text("100" , width-430,450)
text("100" , width-350, 450)
text("200" , width-270, 450)
text("200" , width-190, 450)
text("200" , width-110, 450)



  if(frameCount%60===0){
    particles.push(new Particles(random(550,100),10,10));
  }


for(var j=0; j<particles.length; j++){
  particles[j].display();
  }

for(var j=0; j< plinkos.length;j++){
  plinkos[j].display();
}

for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}

if(particle!==null){

  particle.display();
  if(particle.body.position.y>560){
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      if(count=>5){

      
      gameState="end";
    }
  
  }
  }
}

 





  drawSprites();
}

function mousePressed(){
if(gameState!=="end"){
count++;
particle=new Particles(mouseX,10,10,10);
  }
}