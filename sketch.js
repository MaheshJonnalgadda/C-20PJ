var gd;
var c1,c2,c3,c4;
var m1,m2,m3,m4
function preload() {
    //load the images here
  c1=  loadImage("./images/cat1.png")
  c2=  loadImage("./images/cat2.png")
  c3=  loadImage("./images/cat3.png")
  c4=  loadImage("./images/cat4.png")

  gd= loadImage("./images/garden.png")

  m1= loadImage("./images/mouse1.png")
  m2= loadImage("./images/mouse2.png")
  m3= loadImage("./images/mouse3.png")
  m4= loadImage("./images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);

tom.addAnimation("sleep",c1)
tom.scale=0.2
jerry=createSprite(200,600);

jerry.addAnimation("stand",m1)
jerry.scale=0.15

}

function draw() {

    background(gd);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x <(tom.width-jerry.width)/2){

tom.velocity=0
tom.addAnimation("sleeping",c3);
tom.scale=0.2
tom.changeAnimation("sleeping",c3);

jerry.addAnimation("standing",m3);
jerry.changeAnimation("standing",m3);
jerry.scale=0.15
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode===LEFT_ARROW){
tom.velocityX=-5


}
}
