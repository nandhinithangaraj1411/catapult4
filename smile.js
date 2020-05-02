class Smile extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("unnamed.jpg");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }
  display(){
    super.display();
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);

    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);

    }
  }

keyPressed(){
    
    if(keyCode === 49){
      this.image=loadImage("smile2.png")
      super.display();
    }
 
    if(keyCode===50){
          this.image=loadImage("smile3.png")
        }
    if(keyCode===51){
      this.image=loadImage("smile4.png")

    }
    if(keyCode===52){
      this.image=loadImage("unnamed.jpg")
    }

}

}

  
  

