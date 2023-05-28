



function init(character){



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