
function preload() {
    //load the images here
    catimg = loadAnimation("images/cat1.png")
    catimg1 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg2 = loadAnimation("images/cat4.png")
   // mouseimg = loadAnimation("images/mouse1")
   bg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600)
    cat.addAnimation("catrest",catimg);
    cat.scale = 0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catrunning",catimg1)
        cat.changeAnimation("catrunning")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
