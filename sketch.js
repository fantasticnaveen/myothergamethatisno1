var player
var ground
var gamestate = 0

function setup() {
  createCanvas(400,400);
  player = createSprite(200, 200, 30, 30)
  ground = new Ground(200, 200, 40, 40)

}


function draw() 
{
  background(51);


 if (keyDown ("SPACE")){
   gamestate = 1
 }
 if (gamestate === 1){
   if (keyDown ("UP_ARROW")){
   player.velocityY = -12
 }
 if (keyDown ("LEFT_ARROW")){
   player.x = player.x - 4
 }
 if (keyDown ("RIGHT_ARROW")){
  player.x = player.x + 4
}
  player.velocityY = player.velocityY + 1
 }
 ground.display()
player.collide(ground)

 
 console.log(player.y)
  drawSprites()
}

