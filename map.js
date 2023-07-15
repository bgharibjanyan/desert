let map ={
    height:0,
    width:0,
    mapElement:document.getElementById("map"),

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
    },



    setDimensions(){
        this.height=this.mapElement.offsetHeight;
        this.height=this.mapElement.offsetHeight;
    },

    generate:function(character,locX,locY,className){
        let genCharacter=new character();
        character.positionX=locX;
        character.positionY=locY;
    

        genCharacter.element=this.appendCharacter(className);
        console.log(genCharacter)
        genCharacter.element.style.top=character.positionY+"px";
        genCharacter.element.style.left=character.positionX+"px";

    },

    appendCharacter: function(className){
        const charElement=document.createElement("img");
        charElement.src = "./img/"+className+".png";
        charElement.classList.add("coffee-monster");
        document.getElementById("map").appendChild(charElement)
        return charElement;

    }
}

map.setDimensions();


var actions={
    goRight:function(character){
        if(character.positionX<map.width-20){
            character.positionX+=character.speed;
        }
        character.direction="right"
        character.moveInMap();
    },
    goLeft:function(character){
        if(character.positionX>20){
            character.positionX-=character.speed;
        }
        character.direction="left"
        
        character.moveInMap();

    },

    goUP:function(character){
        if(character.positionY>20){
            character.positionY-=character.speed;
        }
        character.direction="up"
        character.moveInMap();

    },

    goDown:function(character){
        if(character.positionY<map.height-20){
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
        junDev.speed=25;
        junDev.control=false;
        playerInit()
        }
        else{
            return;
        }
    },

    copterOut:function(){
       
        if(helicopter.control===true){
        junDev.positionX=helicopter.positionX+10
        junDev.positionY=helicopter.positionY-10
        junDev.moveInMap()
        document.getElementById("jun").style.display="flex"
        junDev.speed=5;
        helicopter.speed=0;
        helicopter.control=false;
        junDev.control=true;
        playerInit()
        }
    },


    shoot:function(){

        let targetX=mouseX;
        let targetY=mouseY;

        let positionX=junDev.positionX +10;
        let positionY=junDev.positionY +10;
        let speed=5;

        let XInY=(targetX-junDev.positionX)/(targetY-junDev.positionY);
           
        let speedY=Math.sqrt((speed*speed)/(XInY*XInY+1));
        if(targetY<positionY){
            speedY=speedY*(-1)
            }

        let speedX=XInY*speedY;

        const currentBullet=document.createElement("div")

        currentBullet.setAttribute("class","bullet")
        currentBullet.style.left=positionX+"px";
        currentBullet.style.top=positionY+"px";


       shooting=setInterval(function () {
           
            positionX=positionX+speedX;
            positionY=positionY+speedY;

            currentBullet.style.left=positionX+"px";
            currentBullet.style.top=positionY+"px";
            
        

        },10);

        

        document.getElementById("map").appendChild(currentBullet)
    



    }

}
document.getElementById("map").onclick=actions.shoot;