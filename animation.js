function myMove(dir) {

  let status = true;
  clearInterval(moveid);
  let speed = 10;
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

  if(Math.abs(s_pos[0][0]-f_pos[0])<10&&Math.abs(s_pos[0][1]-f_pos[1])<10)
  {
    foodrepos();
    count++;
    createbody();    
  }

}
function foodrepos()
{
  f_pos = [Math.random()*(gw_size[0]-30),Math.random()*(gw_size[1]-30)];
  f_pos = [Math.round(f_pos[0]/10)*10,Math.round(f_pos[1]/10)*10];
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
  foodtobody[count]=0;
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
      foodtobody[k]+=1;
      if (foodtobody[k]>1){
        return true;
      }      
    }
  }
  return false;
}
function restart()
{
  body.innerHTML='';
  moveid = null;
  snakebody=[head];
  count = 0;
  foodtobody = [];
  statusa = true;
}