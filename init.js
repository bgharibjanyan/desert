
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function playerInit(char){

var currentCharacter=char;

document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
        actions.goDown(currentCharacter);
    }
    else if (event.key === 'a') {
        actions.goLeft(currentCharacter);
    }
    else if (event.key === 'd') {
        actions.goRight(currentCharacter);
    } 
    else if (event.key === 'w') {
        actions.goUP(currentCharacter);
    }
    else if (event.key === 'e' ) {
        actions.copterIn();
    }
    else if (event.key === 'q' ) {
        actions.copterOut();
    }
  });

  document.getElementById("map").onclick=junDev.weapon.shoot;

}

function mapGeneration(){

for(var i=0;i<10;i++){

    var locationX=getRandomInt(1000)
    var locationY=getRandomInt(750)
  
   var mob= new CoffeeMonster(); 
    
    map.generate(mob,locationX,locationY,"coffee_monster","coffee-monster");
  }  

}



window.onload = function() {
var gun = new Weapon(10, 30);
junDev.weapon=gun;
mapGeneration();
playerInit(junDev);

};


let mouseX, mouseY;

document.onmousemove = function(event) {
mouseX = event.clientX;
mouseY = event.clientY;
};