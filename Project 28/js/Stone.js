class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restituion:0,
            friction:1,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("PluckingMangoes/stone.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
        }
        display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      elipseMode(CIRCLE);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
        }

    }