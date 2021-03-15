class Launcher{
    constructor(body, anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            length:1,
            stiffness:100
        }
        this.bodyA = body;
        this.pointB = anchor;
        this.launcher=create(options);
        World.add(world, this.launcher);

    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;   
    }

    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}