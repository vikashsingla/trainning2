function onlodecanvas()
{

    var c=document.getElementById("v");
    var ctx=c.getContext("2d");
    var grd=ctx.createRadialGradient(100,70,10,150,80,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"green");
    ctx.fillStyle=grd;
    ctx.fillRect(20,20,200,250);
}
var txt="";
onlodecanvas();


function demo()
{
    var person =
      {
        firstname:"john",
        lastname:"doe",
        id:"4545"
      };
    var person = person.lastname + "<br><br>";
    var y=5;
    var z=y+4;
    var x="code name :"+ navigator.appCodeName + "<br><br>" ;
    var i;
    var mycars=new Array();
    mycars[0]="saab";
    mycars[1]="volvo";
    mycars[2]="BMW";

     var a="";
    for(i=0;i<mycars.length;i++)
     {
       a= a+mycars[i]+"<br><br>";
     }

     var demoP=document.getElementById('demo')
    demoP.innerHTML=a + x + person + "s=" + z ;
}



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


   if(time<20)
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
    document.getElementById("demo2").innerHTML=x;
}
function draw(direction)
{
    var c=document.getElementById("mycanvas");
    var ctx= c.getContext("2d");
    ctx.clearRect(0,0, c.width, c.height) ;
    var img=document.getElementById("tree")
    img.innerHTML=c;
    var pat=ctx.createPattern(img,direction);
    ctx.rect(0,0,200,150);
    ctx.fillStyle=pat;
    ctx.fill();
}











