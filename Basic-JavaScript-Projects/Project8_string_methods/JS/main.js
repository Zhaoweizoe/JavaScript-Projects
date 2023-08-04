function full_Sentence(){
    var part_1="My little ";
    var part_2="book of ";
    var part_3="inspiring thought, ";
    var part_4="do you like it?";
    var whole_sentence=part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}//concat() Method Assignment

function slice_Method(){
    var Sentence="JavaScript counts positions from zero.";
    var Section=Sentence.slice(10,16);
    document.getElementById("Slice").innerHTML=Section;
}//slice() Method Assignment

function uppercase_Method(){
    var text="It is a good weekend";
    document.getElementById("UpperCase").innerHTML=text.toUpperCase();
}//UpperCase() method Challenge

function search_Method(){
    var text="We look forward to hopefully meeting you soon."
    position = text.search("to");
    document.getElementById("search").innerHTML = position;
}//search() method Challenge

function string_Method(){
    var X=200;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}//Number Methods

function precision_Method(){
    var Y=3.171926;
    document.getElementById("Precision").innerHTML=Y.toPrecision(4);
}//Precision() Method

function toFixed_Method(){
    var X=2.86598;
    n=X.toFixed();
    document.getElementById("toFixed").innerHTML=n;
}//toFixed() method

function valueOf_Method(){
    var text="Good weekend";
    result=text;
    document.getElementById("valueOf").innerHTML=result;
}// valueOf() method

