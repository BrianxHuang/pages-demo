var head = document.getElementById("head");
var body = document.getElementById("body");
var food = document.getElementById("food");
var gamewindow = document.getElementById("gamewindow");
var moveid = null;
var snakebody=[head];
var count = 0;
var foodtobody = [];
var statusa = true;
//initial gamewindow, snake, food
gamewindow.style ="position:relative;border:2px solid Black";



//set game windowe size
var gw_size = [window.innerWidth,window.innerHeight];
gw_size = [Math.round(window.innerWidth/10)*10,Math.round(window.innerHeight/10)*10];
gamewindow.style.width = (gw_size[0]-20)+"px";
gamewindow.style.height= (gw_size[1]-20)+"px";
var gw_sizelimit=[gw_size[0]-30,gw_size[1]-30]

//set snake position

var s_pos= [[Math.random()*(gw_size[0]-30),Math.random()*(gw_size[1]-30)]];
s_pos[0]= [Math.round(s_pos[0][0]/10)*10,Math.round(s_pos[0][1]/10)*10];
var s_newpos=[];
head.style.left = s_pos[0][0] + 'px';
head.style.top = s_pos[0][1]+ 'px';      


window.addEventListener('keydown',  function(e){
    if (statusa==true){
        clearInterval(moveid);
        myMove(e.key);
    }       
})
window.addEventListener("click", function(){ alert("Hello World!"); });
var f_pos = [];
foodrepos();

