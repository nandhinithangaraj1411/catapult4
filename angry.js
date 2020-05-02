class Angry extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("angry.jpeg");

    this.visibility=255;
 
  }
display(){
   console.log(this.body.speed)
   
    if(this.body.speed<8){
      super.display();
   }
else{
     World.remove(world,this.body)
     push();
     this.visibility=this.visibility-5
     if(this.visibility<10 && this.visibility>0){
       score=score+1
 }
     tint (255,this.visibility)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     pop();

    
}


}
};