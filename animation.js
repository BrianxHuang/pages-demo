function myMove(dir) {
  let status = true;
  clearInterval(moveid);
  let speed = ratio*1;
  let vtime = 50;
  let direction;
  moveid = setInterval(move, vtime);  
  function move() {           
    s_newpos[0]=s_pos[0][0];
    s_newpos[1]=s_pos[0][1];        
    switch (dir) {
      case "ArrowLeft":
        if (s_newpos[0] <= 0||collison()) {                
          clearInterval(moveid);
          statusa = false;
          alert("you died!");
          restart();
        } else {
          s_newpos[0]-=speed;                  
        } 
        break;
      case "ArrowUp":
        if (s_newpos[1] <= 0||collison()) {                
          clearInterval(moveid);
          statusa = false;
          alert("you died!");
          restart();
        } else {
          s_newpos[1]-=speed;                       
        } 
        break;
      case "ArrowRight":
        if (s_newpos[0] >= gw_sizelimit[0]||collison()) {                
          clearInterval(moveid);
          statusa = false;
          alert("you died!");
          restart();
        } else {
          s_newpos[0]+=speed;                                      
        } 
        break;
      case "ArrowDown":
        if (s_newpos[1] >= gw_sizelimit[1]||collison()) {
          clearInterval(moveid);
          statusa = false;
          alert("you died!");
          restart();
        } else {
          s_newpos[1]+=speed;                               
        } 
        break;                
        }            
    snakepos();
    eating();
    }    
  }
  
function eating()
{

  if(Math.abs(s_pos[0][0]-f_pos[0])<ratio&&Math.abs(s_pos[0][1]-f_pos[1])<ratio)
  {
    foodrepos();
    count++;
    createbody();    
  }

}
function foodrepos()
{
  f_pos = [Math.random()*(gw_sizelimit[0]),Math.random()*(gw_sizelimit[1])];
  f_pos = [Math.round(f_pos[0]/ratio)*ratio,Math.round(f_pos[1]/ratio)*ratio];
  food.style.left = f_pos[0]+"px";
  food.style.top = f_pos[1]+"px"; 
}
function createbody()
{
  body.innerHTML=body.innerHTML+'<Div id = body'+count+' class ="snake"></Div>';
  for (let j = 1;j<=count;j++){    
    snakebody[j] = document.getElementById("body"+j);   
  }   
  s_pos[count]=[0,0];   
  s_pos[count][0]=s_pos[0][0];
  s_pos[count][1]=s_pos[0][1];          
  snakebody[count].style.left = s_pos[count][0] + 'px';  
  snakebody[count].style.top = s_pos[count][1] + 'px'; 
  bodycollison[count]=0;
}
function snakepos()
{      
  for(let i=count;i>0;i--){   
    s_pos[i][0]=s_pos[i-1][0];
    s_pos[i][1]=s_pos[i-1][1]; 
    snakebody[i].style.left = s_pos[i][0]+'px';
    snakebody[i].style.top = s_pos[i][1]+'px';
  }   
  s_pos[0][0]=s_newpos[0];
  s_pos[0][1]=s_newpos[1];              
  head.style.left = s_pos[0][0] + 'px';
  head.style.top = s_pos[0][1]+ 'px';  
}
function collison()
{      
  for (let k = 1;k<=count;k++)
  {
    if(Math.abs(s_pos[0][0]-s_pos[k][0])==0&&Math.abs(s_pos[0][1]-s_pos[k][1])==0)
    {
      bodycollison[k]+=1;      
      if (bodycollison[k]>1){
        return true;
      }      
    }
  }
  return false;
}
function fingerdirection(start,end)
{
  let movelength = [end[0]-start[0],end[1]-start[1]];  
  if (movelength[0]>=0&&(movelength[0]>=Math.abs(movelength[1])))
  {
    return "ArrowRight";
  }else if (movelength[0]<0&&(Math.abs(movelength[0])>=Math.abs(movelength[1])))
  {
    return "ArrowLeft";
  }
  if (movelength[1]<=0&&(Math.abs(movelength[1])>Math.abs(movelength[0])))
  {
    return "ArrowUp";
  }else if (movelength[1]>0&&((movelength[1])>Math.abs(movelength[0])))
  {
    return "ArrowDown";
  }
  
}
function restart()
{
  body.innerHTML='';
  moveid = null;
  snakebody=[head];
  count = 0;
  bodycollison = [];
  statusa = true;
}
