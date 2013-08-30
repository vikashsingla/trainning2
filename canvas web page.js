function button()
{

    var c=document.getElementById("demo").src="canvas.html";
}
function button2()
{
    var c=document.getElementById("demo").src="wabpage.html";

}
function i()
{
    var c=document.getElementById("demo1").src="file:///home/manusis/Pictures/images1.jpg";
}
function shadow()
{
    var c=document.getElementById("myCanvas");
    var ctx= c.getContext("2d");
    ctx.shadowBlur=10;
    ctx.shadowOffsetX=20;
    ctx.shadowColor="green";
    ctx.fillStyle="red";
    ctx.fillRect(20,20,100,100);





    var c=document.getElementById("myCanvas2");
    var ctx= c.getContext("2d");
    ctx.shadowBlur=10;
    ctx.shadowOffsetY=20;
    ctx.shadowColor="green";
    ctx.fillStyle="red";
    ctx.fillRect(20,20,100,100);

    var c=document.getElementById("myCanvas3");
    var ctx= c.getContext("2d");
    var gradient=ctx.createLinearGradient(0,0,170,80);
    gradient.addColorStop("0.5","magenta");
    gradient.addColorStop("1","red");
    gradient.addColorStop("0.5","blue");
    ctx.strokeStyle=gradient;
    ctx.lineWidth=10;
    ctx.strokeRect(20,20,150,100);



    var c=document.getElementById("myCanvas4");
    var ctx= c.getContext("2d");
    ctx.font="50px verdana";
//    var gradient=ctx.createLinearGradient(0,0,c.width,0);
    gradient.addColorStop("0.5","gold");
    gradient.addColorStop("0","purple");
    gradient.addColorStop("1.0","red");
    ctx.strokeStyle=gradient;
    ctx.strokeText("Helo Canvas",10,50);




}