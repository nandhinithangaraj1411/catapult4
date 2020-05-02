const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gd;
var score=0;
var timer=30;

function preload() {
    backgroundImg = loadImage("bg.jpg");
    smile2 = loadImage("smile2.png")
    smile3 = loadImage("smile3.png")
    smile4 = loadImage("smile4.png")
    smile5 = loadImage("unnamed.jpg")
    scroll1 = loadImage("scroll.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(170,250, 350, 10);
    gd = new Ground(500,200,100,10);
    gd2= new Ground(1100,200,100,10);
    
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(840,320,70,70);
    box4 = new Box(910,320,70,70);
    box5 = new Box(770,250,70,70);
    box6 = new Box(840,250,70,70);
    box7 = new Box(800,180,70,70)
    box8 = new Box(530,100,30,30)
    box9 = new Box(500,100,30,30)
    box10 = new Box(470,100,30,30)
    box11 =new Box(500,5,30,30)
    box12 =new Box(1072,70,30,30)
    box13 =new Box(1102,70,30,30)
    box14=new Box(1132,70,30,30)
    box15=new Box(1102,40,30,30)
    log1 =  new Log(800,110,40, PI/2);
    an1 = new Angry(800, 100);
    an2 = new Angry(500,3);
    an3 = new Angry(1102,-10)
    smile = new Smile(200,50);
    slingshot = new Slingshot(smile.body,{x:200,y:50});
    

}
function draw(){
    background(backgroundImg);
    Engine.update(engine);
    image(smile2,950,10,40,40)
    image(smile3,1020,10,40,40)
    image(smile4,1090,10,40,40)
    image(smile5,1155,10,40,40)

  
    if (frameCount % 43 == 0 && timer > 0) { 
        timer --;
      }
    if(score!=3  && timer===0){
        textSize(38)
        fill("white")
        text("GameOver",530,100)
      
    }
    if(score===3 && timer!=0){
        textSize(38)
        fill("white")
        text("You Won",530,100)
    }
    fill("white")
    textSize(38)
    text(score,300,55)
    text(timer,400,55)
    strokeWeight(4);
    stroke("black")
    textSize(32);
    fill ("white")
    text ("score",280,20)
    text("time",390,20)
    fill("white")
    textSize(16)
    text("Change player by pressing on keys: 1/2/3/4",890,70)
    textSize(22)
    text("1:",920,40)
    text("2:",995,40)
   text("3:",1070,40)
    text("4:",1135,40)
    box1.display();
    box2.display();
    ground.display();
    an1.display();
    an2.display();
    an3.display();
    log1.display();
   

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    smile.display();
    an2.display()
    platform.display();
    gd.display();
    gd2.display();
    slingshot.display();
    smile.keyPressed();
  
    
    }
   


function mouseDragged(){
    Matter.Body.setPosition(smile.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode===32 && smile.body.speed<1){
        slingshot.attach(smile.body);
        smile.trajectory=[]
        Matter.Body.setPosition(smile.body,{x:200,y:50})
         
    }
}


