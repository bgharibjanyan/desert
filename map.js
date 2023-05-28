let map ={
    height:800,
    width:1200,
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
        document.getElementById("jun").style.display="none"
        helicopter.control=true;
        helicopter.speed=25;
        junDev.control=false;
        init()
    },

    copterOut:function(){
       
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