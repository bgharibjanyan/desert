let junDev= {

    health:100,
    attack:3,
    speed:5,
    positionX:100,
    positionY:100,
    control:true,
    direction:null,
    level:0,
    weapon:0,

    moveInMap:function(){
        document.getElementById("jun").style.top= this.positionY+"px"
        document.getElementById("jun").style.left= this.positionX+"px"
        
        if(this.direction==="left")
        {
            document.getElementById("jun").src = "./img/jun_dev_left.png"
        }
        else if(this.direction==="right")
        {
            document.getElementById("jun").src = "./img/jun_dev_right.png"
        }
        else if(this.direction==="down")
        {
            document.getElementById("jun").src = "./img/jun_dev_down.png"
        }

        else if(this.direction==="up")
        {
            document.getElementById("jun").src = "./img/jun_dev_top.png"
        }
    },
}


let helicopter={
    speed:0,
    positionX:20,
    positionY:20,
    control:false,
    direction:null,


    moveInMap:function(){
        document.getElementById("copter").style.top= this.positionY+"px"
        document.getElementById("copter").style.left= this.positionX+"px"
        
        if(this.direction==="left"&& this.speed>0)
        {
            document.getElementById("copter").src = "./img/hely_left.png"
        }
        else if(this.direction==="right"&& this.speed>0)
        {
            document.getElementById("copter").src = "./img/hely_right.png"
        }
    },
    
}



function CoffeeMonster(){
    this.health=100;
    this.attack=3;
    this.speed=5;
    this.positionX=0;
    this.positionY=0;
    this.control=true;
    this.direction=null;
    this.level=0;
    this.stats="active"
    this.element=null;
    this.nick="coffee_monster";

    moveInMap=function(){
        document.getElementById("jun").style.top= this.positionY+"px"
        document.getElementById("jun").style.left= this.positionX+"px"
        
        if(this.direction==="left")
        {
            document.getElementById("jun").src = "./img/jun_dev_left.png"
        }
        else if(this.direction==="right")
        {
            document.getElementById("jun").src = "./img/jun_dev_right.png"
        }
        else if(this.direction==="down")
        {
            document.getElementById("jun").src = "./img/jun_dev_down.png"
        }

        else if(this.direction==="up")
        {
            document.getElementById("jun").src = "./img/jun_dev_top.png"
        }
    };
    
}
