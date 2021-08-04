
function preload() {
    //load the images here
    catimg = loadAnimation("images/cat1.png")
    catimg1 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg2 = loadAnimation("images/cat4.png")
   // mouseimg = loadAnimation("images/mouse1")
   bg = loadImage("images/garden.png")
   mouseimg1 = loadAnimation("images/mouse1.png");
   mouseimg2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600)
    cat.addAnimation("catrest",catimg);
    cat.scale = 0.2;
    cat.debug = true;

    mouse = createSprite(300,600);
    mouse.addAnimation("mouserest",mouseimg1);
    mouse.scale = 0.2;

    mouse.debug = true;
    mouse.setCollider("rectangle",0,0,20,20,-45);
  


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        mouse.addAnimation("mousedec",mouseimg2)
        mouse.changeAnimation("mousedec");
        cat.addAnimation("catstop",catimg2)
        cat.changeAnimation("catstop");
        cat.velocityX = 0;
    }
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",catimg1)
    cat.changeAnimation("catrunning")
}

}
