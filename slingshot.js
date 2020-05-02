class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        this.sling1=loadImage("sling1.png")
        this.sling2=loadImage("sling2.png")
        this.sling3=loadImage("sling3.png")
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    attach(body){
        this.slingshot.bodyA= body;
    }



    display(){
       /* if(this.slingshot.bodyA){
        var pointB = this.pointB;
        var pointA = this.slingshot.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }*/
        image(this.sling1,190,50)
        image(this.sling2,160,50)
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(7);
            stroke(48,22,8)
            line (pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            line (pointA.x-20,pointA.y,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x-30,pointA.y-10)
            pop ();
    
    }
    }
}
  