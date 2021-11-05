class Player {
  constructor(){
    this.index = null;
    this.distancia = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });  }

  update(name){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distancia
    }); } 
    static infojugadores(){
      var datosjugadores = database.ref('players');
      datosjugadores.on("value",(data)=>{
      jugadores= data.val(); 
      })
     }  
    }
