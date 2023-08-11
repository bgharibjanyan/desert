class Weapon{

  constructor(damage, interval) {
    this.damage = damage;
    this.interval = interval;
   
  };
  

  
  

  shoot() {
    let targetX = mouseX;
    let targetY = mouseY;

    let positionX = junDev.positionX + 10;
    let positionY = junDev.positionY + 10;
    let speed = 5;

    let XInY = (targetX - junDev.positionX) / (targetY - junDev.positionY);

    let speedY = Math.sqrt((speed * speed) / (XInY * XInY + 1));

    if (targetY < positionY) {
      speedY = speedY * -1;
    }

    let speedX = XInY * speedY;

    const currentBullet = document.createElement("div");

    currentBullet.setAttribute("class", "bullet");

    currentBullet.style.left = positionX + "px";
    currentBullet.style.top = positionY + "px";


    let bulPath;

    const shootingInterval = setInterval(()=> {

      positionX = positionX + speedX;
      positionY = positionY + speedY;
  
      currentBullet.style.left = positionX + "px";
      currentBullet.style.top = positionY + "px";
      bulPath=-1;
      


      if (bulPath!== -1) {
        this.hitCheck(positionX,positionY,bulPath).bind(this);

        this.hit(map.mobs[theHit]);

        clearInterval(this.shootingInterval); 
        currentBullet.remove();
      }
  
      if (positionX > map.width || positionY > map.height||positionX < 0 || positionY < 0) {
        clearInterval(this.shootingInterval); 
        currentBullet.remove();

      }
    }, 10);   

    document.getElementById("map").appendChild(currentBullet);
  };


   

   static hitCheck(locX, locY, currentFlag) {

    var flag=-1;

    for (var i = 0; i < map.mobs.length; i++) {
      if (
        locX - map.mobs[i].positionX < 20 ||
        locX - map.mobs[i].positionX > -20 ||
        locY - map.mobs[i].positionY < 20 ||
        locY - map.mobs[i].positionY > -20
      ) {

        flag=i
        
      }
      else{flag=-1}
    }
    currentFlag=flag;
  };

  hit(mob)
  {

    console.log(mob);
   mob.health-=this.damage;
  }
}