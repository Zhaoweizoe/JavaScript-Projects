function Color_Function(){
    var Color_Output;
    var Colors=document.getElementById("Color_Input" ).value;
    var Color_String=" is a great color!";
    switch(Colors){
        case"Red":
           Color_Output="Red"+Color_String;
        break;

        case"Yellow":
            Color_Output="Yellow"+Color_String;
        break;

        case"Green":
            Color_Output="Green"+Color_String;
        break;

        case"Blue":
            Color_Output="Blue"+Color_String;
        break;

        case"Pink":
            Color_Output="Pink"+Color_String;
        break;

        case"Purple":
            Color_Output="Purple"+Color_String;
        break;
        default:
            Color_Output="Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=Color_Output;
}//Switch Statement Assignment




document.addEventListener("DOMContentLoaded", function(){
var c=document.getElementById("Mycanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();
})//Canvas Challenge


document.addEventListener("DOMContentLoaded", function(){
var c2=document.getElementById("Mycanvas2")
var ctx2=c2.getContext("2d");
var grd=ctx2.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx2.fillStyle=grd;
ctx2.fillRect(10,10,150,80)
})

function Hello_World_Function(){
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}//document.getElementsByClassName() Method Assignment


