class Plinko {
    constructor(x,y) {
      var options = {
          isStatic:true,
          
      }
      this.radius=15;
      this.body = Bodies.circle(x,y,this.radius,options);
      
     

     

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle)
      fill("white");
      ellipseMode(CENTER);
      ellipse(0,0,this.radius,this.radius);
      
      pop();
    }
  };