
console.log("Script executed successfully.");//DevTools for debugging

let x = myFunction(8,6);//function call
document.getElementById("Math").innerHTML=x;
function myFunction(a,b){//Defining and naming the function
    return a+b;//print the result in HTML
}// for Mudule 2 section B Math Operators Assignment

let y= subtraction_Function(9,5)//function call
    document.getElementById("SubtractionResult").innerHTML=y;
    function subtraction_Function(a,b){//Defining and naming the function
        return a-b;//print the result in HTML
    }//Subtraction Assignment

    
let z= multiplication(2,3)//function call
function multiplication(){//Defining and naming the function
    var simple_Math=2*3;
    document.getElementById("Math1").innerHTML="2*3="+simple_Math;//print the result in HTML
}//Multiplication Assignment


let a=division(50,5)//function call
function division(){//Defining and naming the function
    var simple_Math=50/5;
    document.getElementById("Math2").innerHTML="50/5="+simple_Math;//print the result in HTML
}// Division Assignment


let b =more_Math(1,2,10,2,5)//function call
function more_Math(){//Defining and naming the function
    var simple_Math=(1+2)*10/2-5;
    console.log("more_Math function executed!");//DevTools for debugging
    document.getElementById("Math3").innerHTML="(1+2)*10/2-5=" + simple_Math;//print the result in HTML
}//Multiple Operators Assignment


let c = modulus_Operator(25,6)//function call
function modulus_Operator(){//Defining and naming the function
    var simple_Math=25%6;
    document.getElementById("Math4").innerHTML="25%6="+ simple_Math;
}//Modulus Operator Assignment

let d=negation_Operator()//function call
function negation_Operator(){//Defining and naming the function
    var x=12
    document.getElementById("Math5").innerHTML=-x//print the result in HTML
}//Negation Operator Assignment

let e=increment()//function call
function increment(){//Defining and naming the function
    var x=5;
    x++
    document.getElementById("incrementResult").innerHTML = x;//print the result in HTML
} //Increment Operators

let f=decrement()//function call
function decrement(){//Defining and naming the  function
    var x=5.22;
    x--
    document.getElementById("decrementResult").innerHTML = x;//print the result in HTML
}//Decrement Operators


let g=randonNmuber()//function call
function randonNmuber(){//Defining and naming the function
    window.alert(Math.random())//print the result in HTML
}//Math.Random Assignment

let h=randonNmuber()//function call
function randonNmuber(){//Defining and naming the function
    window.alert(Math.random()*200)//print the result in HTML
}//Math.Random Assignment



document.getElementById("Math6").innerHTML = Math.PI;//Math Object Challenge