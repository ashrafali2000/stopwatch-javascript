var a;
function set(){
var c=1,d="0",e,x=0,y="0",b,f,g=1,h;
a = setInterval(function(){
if(x<=9){
b=y+x;
x ++;
}
else{
b++;
}
if(b>=100){
b=0;
if(c<=9){
e=d+c;
c++;
}
else{
e++;
}

if(e>=100){
    e=0;
if(g<=9){ 
h=d+g;
g++;
}
else{
h++;
}
document.getElementById("hours").innerHTML=h;
}
document.getElementById("minuts").innerHTML=e;
}
document.getElementById("seconds").innerHTML=b;
},100
);
}
function cancelTimeOut(){
clearInterval(a);
document.getElementById("seconds").innerHTML="00";
document.getElementById("minuts").innerHTML="00";
document.getElementById("hours").innerHTML="00";    
}
function Paused(){
clearInterval(a);
document.getElementById("seconds").innerHTML=h;
document.getElementById("minuts").innerHTML=e;
document.getElementById("hours").innerHTML=b;    
}