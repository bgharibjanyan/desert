function weapon(damage,interval){ 


   this.damage=damage;
   this.interval=interval;

  this.shoot=function(){

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
         
     this.HitCheck(positionX,positionY)

     },10 );
     

     

     document.getElementById("map").appendChild(currentBullet)
 
 };

 this.HitCheck=function(locX,locY){

   
   for(var i=0;i<map.mobs.length;i++)
   {

      if(locX-map.mobs[i].positionX<10||locX-map.mobs[i].positionX>-10){
console.log("123454")
         return true;
      }

   }
 };


}

var gun=new weapon(10,10)