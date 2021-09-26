class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius=radius;
    this.image=bomb;

  }

  display() {
var pos=this.body.position;
push()
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.radius*2,this.radius*8/3);
pop()
  }
}
