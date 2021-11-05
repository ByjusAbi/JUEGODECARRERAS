class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })  }
  
    update(state){
      database.ref('/').update({
        gameState: state
      }); }
      
    async start(){
      if(gameState === 0){
        player = new Player();
        var contador = await database.ref('playerCount').once("value");
        if (contador.exists()){
           playerCount = contador.val();
           player.getCount();
        }
        form = new Form()
        form.display();
      } 
      carro1 = createSprite(100,200);
      carro2 = createSprite(300,200);
      carro3 = createSprite(500,200);
      carro4 = createSprite(700,200);
      carros = [carro1,carro2,carro3,carro4];

    } 
      Play(){
        form.hide();
      
          Player.infojugadores();
          
          if(jugadores !== undefined){
            //var display_position = 100;
            
            //index of the array
            var index = 0;
      
            //x and y position of the cars
            var x = 0;
            var y;
      
            for(var plr in jugadores){
              //add 1 to the index for every loop
              index = index + 1 ;
      
              //position the cars a little away from each other in x direction
              x = x + 200;
              //use data form the database to display the cars in y direction
              y = displayHeight - jugadores[plr].distancia;
              carros[index-1].x = x;
              carros[index-1].y = y;
      
              if (index === player.index){
                carros[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = carros[index-1].y
              }
             
              //textSize(15);
              //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
      
          }
      
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distancia +=10
            player.update();
          }
      
          drawSprites();
        }
      }
      