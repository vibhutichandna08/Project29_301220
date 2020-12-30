class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.pos;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      pop();
    }
}