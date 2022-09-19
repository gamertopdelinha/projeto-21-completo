  
var cavaloDeFundo, tower;
var vavaloDoor, door, doorsGroup;
var climberImg, climber, climbersGroup;
var vavaloSus, vavaloImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  cavaloDeFundo = loadImage("imagensstops.jpg");
  vavaloDoor = loadImage("mega_porta_do_jogo_vavalo.jpg");
  climberImg = loadImage("climber.png");
  vavaloImg = loadImage("VAVALO24.jpg");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",cavaloDeFundo);
  tower.velocityY = 1;
  tower.scale = 5

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  vavaloSus = createSprite(200,200,50,50);
  vavaloSus.scale = 0.3;
  vavaloSus.addImage("among_us", vavaloImg);
}


function draw() {
  background(255);
 if(tower.y > 400 ){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        vavaloSus.x = vavaloSus.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("right_arrow")){
  
          vavaloSus.x = vavaloSus.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         vavaloSus.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  vavaloSus.velocityY = vavaloSus.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     if(climbersGroup.isTouching(vavaloSus)){
      vavaloSus.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(vavaloSus) || vavaloSus.y > 600){
      vavaloSus.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    door.x=Math.round(random(100,400))
    door.addImage(vavaloDoor);
    climber.addImage(climberImg);
    climber.x=door.x
    invisibleBlock.x=climber.x
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //mude a profundidade do fantasma e da porta
    
     
    vavaloSus.depth = door.depth;
    vavaloSus.depth = vavaloSus.depth+1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

