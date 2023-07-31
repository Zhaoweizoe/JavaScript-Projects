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
document.write("<br>"); // Inserting a line break
X=30;
Y=30;
document.write(X===Y);//Return true by ensuring to match the data type and value
document.write("<br>"); // Inserting a line break
X=30;
Y="dog";
document.write(X===Y);//Return false by writing a different data type and different value
document.write("<br>"); // Inserting a line break
X=30;
Y="30";
document.write(X===Y);//Return false by writing a different data type but the same value for both
document.write("<br>"); // Inserting a line break
X=30;
Y=60;
document.write(X===Y);//Return false by writing the same data type but a different value for both.
document.write("<br>"); // Inserting a line break
document.write(3>1&&8>6);//utilize the AND operator to display true and false
document.write(3<1&&8>6);//utilize the AND operator to display true and false
document.write(3>1||8<6);//Utilize the OR operator to display true and false
document.write(3<1||8<6);//Utilize the OR operator to display true and false
document.write("<br>"); // Inserting a line break
document.write("cat"+2);//an expression combining a string and a number

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

function not_Function(){
    document.getElementById("Not").innerHTML=!(5>3);
}//utilize the NOT operator to display true and false

function not_2Function(){
    document.getElementById("Not2").innerHTML=!(5<3);
}//utilize the NOT operator to display true and false








