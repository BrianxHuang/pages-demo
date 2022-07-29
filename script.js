var head = document.getElementById("head");
var body = document.getElementById("body");
var food = document.getElementById("food");
var gamewindow = document.getElementById("gamewindow");
var moveid = null; //ID of setInterval
var snakebody=[head]; //ID list of snake body
var count = 0; //number of snake body
var bodycollison = []; //number of snake body collision
var statusa = true; //check whther ever collision
var ratio =20; //size ratio; 
var fingerstart=[];
var fingerend=[];

//set game windowe size
gamewindow.style ="position:relative;border:2px solid Black";
var gw_size = [window.innerWidth,window.innerHeight];
gw_size = [Math.round(window.innerWidth/ratio)*ratio,Math.round(window.innerHeight/ratio)*ratio];
gamewindow.style.width = (gw_size[0]-40)+"px";
gamewindow.style.height= (gw_size[1]-40)+"px";
var gw_sizelimit=[gw_size[0]-40-ratio,gw_size[1]-40-ratio]

//set snake initial position
var s_pos= [[Math.random()*(gw_sizelimit[0]),Math.random()*(gw_sizelimit[1])]];
s_pos[0]= [Math.round(s_pos[0][0]/ratio)*ratio,Math.round(s_pos[0][1]/ratio)*ratio];
var s_newpos=[]; //temp snake new position
head.style.left = s_pos[0][0] + 'px';
head.style.top = s_pos[0][1]+ 'px';      

//Listen keyborad
window.addEventListener('keydown',  function(e){
    if (statusa==true){
        clearInterval(moveid);
        myMove(e.key);
    }       
})
window.addEventListener('touchstart',  function(e){
    if (statusa==true){
        fingerstart[0] = e.changedTouches[0].pageX;
        fingerstart[1] = e.changedTouches[0].pageY;        
    }       
},false)

window.addEventListener('touchmove',  function(e){
    e.preventDefault();//prevernt screen move
}, { passive: false })

window.addEventListener('touchend',  function(e){
    if (statusa==true){
        fingerend[0] = e.changedTouches[0].pageX;
        fingerend[1] = e.changedTouches[0].pageY;        
        clearInterval(moveid);
        myMove(fingerdirection(fingerstart,fingerend));
        
    }       
},false)


//set food initial position
var f_pos = [];
foodrepos();

