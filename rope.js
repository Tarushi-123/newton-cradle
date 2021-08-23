class Rope{
    constructor(body1,body2,offsetX){
       
      //  this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
           // pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        this.offsetX=offsetX;
    }
    display(){
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;

        strokeWeight(2);

        //var anchor1X=point1.x;
        //var anchor1Y=point1.y;

       // var anchor2X=point2.x;
       // var anchor2Y=point2.y;

        line(point1.x,point1.y,point2.x + this.offsetX,point2.y);

    }

}