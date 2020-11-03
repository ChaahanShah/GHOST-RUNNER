var tower,towerImg;
var door,doorImg,doorsgrp;
var climber,climberImg,climbersgrp;
var ghost,ghostImg;
var invisibleblock,invisibleblocksgrp;
var gamestate = "play";



function preload()
{
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  
}

function setup()
{
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower" , towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.4;
  
  doorsgrp = new Group();
  climbersgrp = new Group();
  invisibleblocksgrp = new Group();
  
}

function draw()
{
  background(0);

  if(gamestate == "play")
    {
      
      
  if(keyDown("space"))
    {
      ghost.velocityY = -10;
      
    }
    
  ghost.velocityY = ghost.velocityY + 0.8;
  if(keyDown("left_arrow"))
    {
      ghost.x = ghost.x - 3;
    }
    
  if(keyDown("right_arrow"))
    {
      ghost.x = ghost.x + 3;
    }
  
  if(tower.y > 400)
  {
    tower.y = 300;
    
  }
  createdoors();
  
  if(climbersgrp.isTouching(ghost))
    {
      ghost.velocityY = 0;
    }
  
  if(invisibleblocksgrp.isTouching(ghost))
    {
  
      ghost.destroy();
      gamestate = "end";
    }
  
  drawSprites();
      
    }
  
  if(gamestate == "end")
    {
      textSize(30);
      fill("yellow");
      text("GAME OVER",200,250);
      
    }
}

 function createdoors()
{
if(frameCount % 240 == 0)
  {
    door = createSprite(200,-50);
  door.addImage("door", doorImg);
    door.velocityY = 1;
    door.x = Math.round(random(120,400))
    
    climber = createSprite(200,10);
    climber.addImage("climber", climberImg);
    climber.velocityY = 1
    climber.x = door.x;
    
    door.lifetime = 800;
    climber.lifetime = 800;
    
    invisibleblock = createSprite(200,15);
    invisibleblock.width = climber.width;
    invisibleblock.height = 2;
    invisibleblock.x = door.x;
    invisibleblock.velocityY = 1;
    invisibleblock.lifetime = 800;
    invisibleblock.debug = true;
   
    doorsgrp.add(door);
    invisibleblocksgrp.add(invisibleblock);
    climbersgrp.add(climber);
  }
  
  
  
}