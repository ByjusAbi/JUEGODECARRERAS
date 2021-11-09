var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var jugadores;
var distancia=0;
var carro1, carro2,carro3,carro4;
var carros;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
    
}




/*var ball;
var basededatos;
var position;

function setup(){
    basededatos = firebase.database();
    console.log(basededatos);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = basededatos.ref('ball/position');
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        posicionendatabase(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        posicionendatabase(1,0);
    }
    else if(keyDown(UP_ARROW)){
        posicionendatabase(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        posicionendatabase(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function posicionendatabase(x,y){
basededatos.ref('ball/position').set({
'x': position.x + x,'y': position.y + y
})
}
function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}
function showError(){
console.log("Error no puede escribir en base de datos");
}*/





//set: cambia posicion de pelota.