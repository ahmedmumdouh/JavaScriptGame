
let seaStarMotion= () =>{
    
    let seaStarTimerMax = Math.floor(Math.random() * 501) + (100 + 400* LEVEL_SPEED);
    seaStarTimer++;
    if (seaStarTimer===seaStarTimerMax){
        seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
        seaStarTimer=0;
        seaStarPositionX=Math.floor(Math.random() * parseInt(window.innerWidth));
        seaStarMovingFlag=true;

    }

    if(seaStarMovingFlag){
        seaStarObj.style.display='inline-block';
        seaStarObj.style.left=seaStarPositionX+'px';
        seaStarObj.style.top=seaStarPositionY+'px';
        seaStarPositionY=seaStarPositionY+3;
        if (seaStarPositionY>=parseInt(window.innerHeight))
        {
          seaStarObj.style.display='none';
          seaStarObj.style.top=0+'px';
          seaStarMovingFlag=false;
          seaStarPositionY=0;
          seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
        }

    }
  }



  let bonusAdd= () =>{

    
      seaStarNum++;
      seaStarObj.style.display='none';
      seaStarObj.style.top=0+'px';
      seaStarMovingFlag=false;
      seaStarPositionY=0;
      seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
  };
