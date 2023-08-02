if(20<30){
    document.write("That is right")
}//If Statement Assignment

document.write("<br>");

var X=2
function Add_number_1(){
    document.write(20+X+"<br>");
}
function Add_number_2(){
    document.write(X+100);
}
Add_number_1();
Add_number_2();//Global Variable Assignment

document.write("<br>");

function Add_number_3(){
    var Y=3;
    console.log(15+Y);
    document.write(20+Y+"<br>");
}
function Add_number_4(){
    document.write(Y+100);
}
Add_number_3();
Add_number_4();//Local Variable Assignment and the console.log() method to debug it within the console in the Chrome Dev Tools


function get_Date(){
    if(new Date().getHours()<19){
        document.getElementById("Greeting").innerHTML="Good afternoon";
    }
}//Method Assignment

function Age_Function(){
    Age=document.getElementById("Age").value;
    if(Age>=18){
        result="You are old enough to vote!";
    }
    else{
        result="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=result;
}//Else Assignment


function Time_function(){
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0){
        Reply="It is morning time!";
    }
    else if(Time>=12==Time<18){
        Reply="It is afternoon.";
    }
    else{
        Reply="It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML=Reply

}//Else If Assignment