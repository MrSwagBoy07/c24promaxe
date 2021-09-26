class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius*2,this.radius*8/3);
    pop()
  }
};
