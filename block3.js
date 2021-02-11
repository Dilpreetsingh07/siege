class Block3 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.1,
          density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
