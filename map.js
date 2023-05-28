let map ={
    height:800,
    width:1200,

    items: new Array(),

    distance: function(firstCharacter,secondCharacter ){
        let firstX=firstCharacter.positionX;

        let firstY=firstCharacter.positionY;
        let secondX= secondCharacter.positionX;
        let secondY= secondCharacter.positionY;

        let xDistance=firstX-secondX;

        let yDistance=firstY-secondY;

        let distance=Math.round( Math.sqrt(yDistance*yDistance)+(xDistance*xDistance))/10;
        
        return Number(distance);
    }
}


var actions={
    goRight:function(character){
        if(character.positionX<map.width-50){
            character.positionX+=character.speed;
        }
        character.direction="right"
        character.moveInMap();
    },
    goLeft:function(character){
        if(character.positionX>50){
            character.positionX-=character.speed;
        }
        character.direction="left"
        
        character.moveInMap();

    },

    goUP:function(character){
        if(character.positionY>50){
            character.positionY-=character.speed;
        }
        character.direction="up"
        character.moveInMap();

    },

    goDown:function(character){
        if(character.positionY<map.height-50){
            character.positionY+=character.speed;
        }
        character.direction="down"

        character.moveInMap();
    },




    copterIn:function(){

        if(map.distance(helicopter, junDev)<100){

        document.getElementById("jun").style.display="none"
        helicopter.control=true;
        helicopter.speed=25;
        junDev.control=false;
        init()
        }
        else{
            return;
        }
    },

    copterOut:function(){
       
        if(helicopter.control===true){
        junDev.positionX=helicopter.positionX+10
        junDev.positionY=helicopter.positionY-10
        junDev.moveInMap
         document.getElementById("jun").style.display="flex"
         helicopter.speed=0;
        helicopter.control=false;
        junDev.control=true;
        init()
        }
    }

}