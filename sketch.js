var player, ground;
var groundImg,playerImg;
var iGround;
var gob,aob;
var gobGroup,aobGroup;
var bg,gobI,aobI

function preload(){
    groundImg = loadImage("ground.png");
    playerImg = loadImage("mazikeen.png");
   bg = loadImage("backgroung.jpg");
  gobI = loadImage("obstacle.png");
   aobI = loadImage("arrow.png");
}

function setup(){
    createCanvas(2000,500)
    player = createSprite(95,365,30,20)
    player.addImage(playerImg)
    player.scale = 0.5;

    iGround = createSprite(200,470,500,10)

    ground = createSprite(500,480,windowWidth,10)
    ground.scale = 0.5;
    ground.velocityX = -5;
    ground.addImage(groundImg);
    gobGroup = new Group ();
    aobGroup  = new Group ();
    
}

function draw(){
background(bg)
textSize(30)
text(mouseX+","+mouseY,mouseX,mouseY)


     if (keyDown("w")){
      player.velocityY = -12

       }
      player.velocityY += 0.8
      player.collide(iGround)

      if(ground.x<0){
     ground.x = ground.width/2
     }
 groundObstacles();
 airObstacles();
    drawSprites()
}

function groundObstacles(){
 if(frameCount%95 == 0){
 gob = createSprite(600,445,10,40)
gob.addImage(gobI)
gob.scale = 0.3
 gob.velocityX = -2;
 gob.lifetime = 300; 
 gobGroup.add(gob);
 }
}

function airObstacles(){
    if(frameCount%125 ===0){
        aob = createSprite(600,80,40,10)
        aob.addImage(aobI)
        aob.scale = 0.1;
        aob.y = Math.round(random(250,450))
        aob.velocityX = -2;
        aob.lifetime = 300; 
        aobGroup.add(aob);
    }
}