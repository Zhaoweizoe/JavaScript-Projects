//Function assignment
function Zoe_First_Function() { 
    var str="This is the button text!";//creating the variable
    document.getElementById("Button_Text").innerHTML=str;//using document.getElementById()
    document.getElementById("Button_Text_Paragraph").style.display = "block";//using document.getElementById(),define the style
}

//a funtion that uses the += operator
function myFunction(){
    var sentence="I am learning";//creating the variable
    sentence += "a lot from this book!";//using the += operator to add to the variable
    document.getElementById("Concatenate").innerHTML=sentence;//using document.getElementById()
}