class Particles{
constructor(x,y,radius){
 var option={

   
   "restitution":0.4,
   "density":50

 }

this.radius=radius;
this.body=Bodies.circle(x,y,this.radius,option);
this.color=color(random(0,255),random(0,255),random(0,255));

World.add(world,this.body);



}
display(){
   
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
}


}