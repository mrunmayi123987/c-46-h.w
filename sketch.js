var START=0;
var PLAY = 1;
var END = 2;
var girlImg , girl;
var background,backgroundImg;
var invisibleground;
var bflyimg1,bflyimg,bflyimg2;
var bfly,bfly1,bfly2;
var butterflyGroup;
var score=0;
var GameState = START;
var butterfly;
var stone , stoneImg;
var bushes , bushesImg;

function preload(){

  girlImg = loadImage("girl_image.jpg");
  backgroundImg = loadImage("gardenImage.png");
  bflyimg = loadImage("butterfly.png");
  bflyimg1 = loadImage("butterfly(1).png");
  bflyimg2 = loadImage("butterfly2.png");
  stoneImg = loadImage("stone_image.png");
  bushesImg = loadImage("bushes_image.png");

}

function setup() {
  createCanvas(1200,800);

  background = createSprite(600,200,20,20);
background.addImage(backgroundImg);

invisibleground=createSprite(600,750,1200,20);
invisibleground.visible=false;

stone = createSprite(10,730,20,20);
bushes = createSprite(10,730,20,20);

  girl = createSprite(400, 200, 50, 50);
girl.addImage(girlImg);
girl.scale=0.2;

butterfly = createSprite(900,100,20,20);
fill("black");
textSize(20);
}

function draw() {
  if(GameState ===START){
  background.velocityX=0;
  invisibleground.velocityX=0;
  butterfly.velocityX=0;
  butterfly.visible=false;

  if(keyDown("r")){
    gamestart();
  }
  }

  if(GameState===PLAY){
  background.velocityX=-5;
  invisibleground.velocityX=-5;
  
  if(invisibleground.x<0){
  
  invisibleground.x=600;
  }
  
  if(background.x<0){
  
    background.x=600;
    }
  
  
  
  if(keyDown("space")&&girl.y>=100){;
  girl.velocityY=-12;
  //jumpSound.play();
  }
  
  girl.velocityY=girl.velocityY+0.8;
  
  girl.collide(invisibleground); 
  
  
  
  spawnButterfly();
  spawnStone();
  spawnBushes();
  
  
  if(butterfly.collide(girl)){
  //butterfly.destroyEach();
    //butterflyGroup.destroyEach();
    score=score+1
   // diesound.play();
  }
}
  
    drawSprites();
  if(GameState===START){
 text("The girl is fascinated with butterflies; ",300,350);
 text("help her catch butterflies by pressing'r'to start the game",400,400);
  }
    text("score:"+score,100,100);
  
  }
  
  function spawnButterfly(){
  if(frameCount%100===0){
   butterfly = createSprite(900,100,20,20);
  butterfly.velocityX=-5;
  butterfly.y=random(100,200);
  
  var rand = Math.round(random(1,3));
  switch(rand){
  case 1: butterfly.addImage(bflyimg);
          break;
  case 2: butterfly.addImage(bflyimg1);
          break;        
  case 3: butterfly.addImage(bflyimg2);
          break;
          default:break;
  }
  butterfly.lifetime=200;
  butterfly.scale=0.2;
  //butterflyGroup.add(butterfly);
  } 
  
  }

  function spawnStone(){
if(frameCount%200===0){
stone = createSprite(1100,730,20,20);
stone.addImage(stoneImg);
stone.velocityX=-5;
//stone.x=random(200,400);
stone.lifetime=150;
stone.scale=0.5;
}
  }

  function spawnBushes(){
    if(frameCount%300===0){
    bushes = createSprite(1200,730,20,20);
    bushes.addImage(bushesImg);
    bushes.velocityX=-5;
   //bushes.x=random(200,400);
    bushes.lifetime=150;
    bushes.scale=0.5;
    }
      }
   
  function gamestart(){

GameState=PLAY;    
  }