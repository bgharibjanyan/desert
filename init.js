
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    


function playerInit(character){



 var currentCharacter=character;

 if(junDev.control==true)
 {
     currentCharacter=junDev;
 }
 else{
     currentCharacter=helicopter
 }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown' || event.keyCode === 40) {
            actions.goDown(currentCharacter);
        }
        else if (event.key === 'ArrowLeft' || event.keyCode ===37) {
            actions.goLeft(currentCharacter);
        }
        else if (event.key === 'ArrowRight' || event.keyCode === 39) {
            actions.goRight(currentCharacter);
        } 
        else if (event.key === 'ArrowUp' || event.keyCode === 38) {
            actions.goUP(currentCharacter);
        }
        else if (event.key === 'w' ) {
            actions.copterIn();
        }
        else if (event.key === 'q' ) {
            actions.copterOut();
        }
      });



      
      

     
}

function mapGeneration(){

 for(var i=0;i<10;i++){

        var locationX=getRandomInt(1000)
        var locationY=getRandomInt(750)
      
        

        map.generate(CoffeeMonster,locationX,locationY,"coffee_monster");
      }  

}



window.onload = function() {
    mapGeneration();
    playerInit(junDev);
  };


let mouseX, mouseY;

document.onmousemove = function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
};