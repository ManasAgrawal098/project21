var bullet,thickness;
var wall,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(400, 200, 100, 10);
 thickness = Math.round(random(22,83));
wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80)
weight = Math.round(random(30,52))
speed = Math.round(random(223,321))
bullet.velocityX = speed;
console.log(speed)
console.log(weight)
console.log(thickness)
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    console.log(damage) 
    if(damage>10){
      wall.shapeColor = "red"
    }if(damage<10){
      wall.shapeColor = "green"
    }
  }  
  
  drawSprites();
}
function hasCollided(object1,object2){
  bulletRightEdge =object1.x + object1.width;
  wallLeftEdge=object2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
