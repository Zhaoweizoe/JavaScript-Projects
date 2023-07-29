console.log("Sucessfully")//console.log() Assignment

console.log(1>2);//Boolean Challenge

document.write("25"+5+"<br>");//Type Coercion

document.write(typeof"Word"+"<br>");//"Type Of" Operator:output “string”

document.write(typeof 4+"<br>");//"Type Of" Operator:output “number”

document.write(9>5);//Boolean Assignment
document.write("<br>"); // Inserting a line break
document.write(9<5);//Boolean Assignment
document.write("<br>"); // Inserting a line break
document.write(2==3);//Double Equal Signs Assignment
document.write("<br>"); // Inserting a line break
document.write(3==3);//Double Equal Signs Assignment

function my_Function(){
    document.getElementById("Test").innerHTML= 0/0;
}//NaN Challenge

function my_secondFunction(){
    document.getElementById("Test1").innerHTML=isNaN('This is a string');
}//NaN Challenge

function my_thirdFunction(){
    document.getElementById("Test2").innerHTML=isNaN('123');
}//NaN Challenge



function firstInfinityAssignment(){
document.getElementById("infinity").innerHTML=1/0;
}//Infinity Assignment


function secondInfinityAssignment(){
document.getElementById("negativeInfinity").innerHTML= -1/0;
}//Infinity Assignment



