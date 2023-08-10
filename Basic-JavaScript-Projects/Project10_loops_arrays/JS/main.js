function Call_Loop(){
    var Digit="";
    var X=1;
    while(X<10){
        Digit+="<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}//Loops Assignment


let text="Great Houghton";
let length=text.length;
document.getElementById("Length_Property_Challenge").innerHTML=length;//Length Property Challenge


var Instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop(){
    for(Y=0;Y<Instruments.length;Y++){
        Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}//For Loop Assignment

function array_Function(){
    var apple=[]
    apple[0]="red";
    apple[1]="green";
    apple[2]="overripe";
    apple[3]="sweet";
    document.getElementById("Array").innerHTML="This apple is " +apple[1]+".";
}//array_Function,document.getElementById().innerHTML Assignment

function constant_function(){
    const Musical_Instrument={type:"piano",brand:"Yamaha",color:"black",age:"1"};
    Musical_Instrument.color="white";
    Musical_Instrument.price="5000 pounds";
    document.getElementById("Constant").innerHTML="The cost of the "+Musical_Instrument.type+" was "+Musical_Instrument.price;
}//Const Keyword Assignment

var X=82;
document.getElementById("Let_keyword").innerHTML=X;
{
    let innerX=34;
    document.getElementById("Let_keyword").innerHTML+="<br>"+innerX;
}
document.getElementById("Let_keyword").innerHTML+="<br>"+X;//the let keyword cannot be accessed outside of the block


var X=82;
document.getElementById("Let_keyword2").innerHTML=X;
{
    var X=33;
    document.getElementById("Let_keyword2").innerHTML+="<br>"+X;
}
document.getElementById("Let_keyword2").innerHTML+="<br>"+X;//the var keyword cannot have block scope (access limited to inside the block)

function myFunction1(){
    return Math.E;
}
document.getElementById("return1").innerHTML=myFunction1();//Return Statement Challenge

document.getElementById("return2").innerHTML=myFunction("Lily");
function myFunction(name){
    return"Hello"+name;
}//Return Statement Challenge

let cat={
    color:"white",
    breed:"british short hair",
    age:"7",
    description:function(){
        return"This cat is  "+this.color+" "+this.breed+this.age+" years old cat.";
    }
};
document.getElementById("Cat_Object").innerHTML=cat.description();//Object Assignment

let Mytext="";
for(let i=0;i<15;i++){
    if(i===4){break;}
    Mytext+="The number is"+i+"<br>";
}
document.getElementById("mybreakfunction").innerHTML=Mytext;//break statement

let Mysecondtext="";
for(let i=0;i<15;i++){
    if(i===4){continue;}
    Mysecondtext+="The number is"+i+"<br>";
}
document.getElementById("mycontinuefunction").innerHTML=Mysecondtext;//continue statement
