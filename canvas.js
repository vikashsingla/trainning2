var c=document.getElementById("v");
var ctx=c.getContext("2d");
var grd=ctx.createRadialGradient(100,70,10,150,80,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"green");
ctx.fillStyle=grd;
ctx.fillRect(20,20,200,250);



var txt="";
function message()
{
    try

    {

        adddlert("Welcome guest!");
    }
    catch(err)
    {

        txt="There was an error on this form";
         alert(txt);

        txt="fill all the blanks";
        alert(txt);

    }
}
function myfunction(name)
{
    alert("welcome" +name+"" );
}
function v()
{
    var x=5+5;
    var y="10"+20;
    var z="hi"+7;


    var demop=document.getElementById("demo");
    demop.innerHTML=x+"<br>"+y+"<br>"+z;
}
function my()
{
    var x="";
    var time=new Date().getHours();


   if(time<14)
   {
       x="Good Day" ;

   }
    else
   {
       x="good evening";
   }
    document.getElementById("demo").innerHTML=x;
}
function vv()
{
   var x="",i=0;
    while(i<9)
    {
        x=x + "this no. is" + i + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML=x;
}

