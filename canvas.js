var c=document.getElementById("v");
var ctx=c.getContext("2d");
var grd=ctx.createRadialGradient(100,70,10,150,80,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"green");
ctx.fillStyle=grd;
ctx.fillRect(20,20,200,250);