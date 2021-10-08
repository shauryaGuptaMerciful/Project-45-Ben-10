var heatblast, heatblastImg;
var builidng; 
var fireball;
var villain, villaingrp;
var score;

function preload(){
  heatblastImg = loadImage("heatblast.png");
  backgroundImg = loadImage("background.jpg");
  fireballImg  = loadImage("fireball1.png");
  villain1Img = loadImage("aggregor.png");
  villain2Img  =loadImage("highbreed.png");
  villain3Img = loadImage("kevin1.png");
  villain4Img = loadImage("kevin2.png");
  villain5Img = loadImage("vilgax.png");
  bgm = loadSound("bgm2.wav")
}


function setup() {
  createCanvas(2000 ,900);
  heatblast = createSprite(350, 290, 25, 50);
  heatblast.scale = 0.4;
  heatblast.addImage(heatblastImg);

  villaingrp = createGroup();
  fireballgrp = createGroup();

  bgm.play();

  score = 0;

  spawnVillains();
  
  villain1 = createGroup();
  edges = createEdgeSprites();
}

function draw() {
  background(backgroundImg);  
  heatblast.y = mouseY;
  heatblast.bounceOff(edges);

  var x = heatblast.x + 20;
  var y = heatblast.y + 20;
  fireball = createSprite(x, y, 50, 50);
  fireball.visible = false;

  if (keyDown("SPACE")){
    fireball.visible = true;
    fireball.addImage(fireballImg);
    fireball.scale = 0.05
    fireball.velocityX = 20
    fireballgrp.add(fireball);
  }

  if(fireballgrp.isTouching(villaingrp)){
    fireballgrp.destroyEach();
    score+=100
    villain.destroy();
    spawnVillains();
  }

  textSize(50)
  fill("red")
  text("score = " + score, 1550, 100);
 
  drawSprites();
}



function spawnVillains(){
 
    var x = Math.round(random(500, 1500));
    var y = Math.round(random(200, 700));
      villain = createSprite(x,y,10,40);
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: villain.addImage(villain1Img); villain.scale  = 0.3;
               break;
       case 2: villain.addImage(villain2Img);villain.scale = 0.3;
               break;
       case 3: villain.addImage(villain3Img);
               break;
       case 4: villain.addImage(villain4Img);villain.scale = 0.4;
               break;
       case 5: villain.addImage(villain5Img); villain.scale = 0.2;
       default: break;

  }

  villaingrp.add(villain);
}


