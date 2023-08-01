function Ride_Function(){
    var Height,can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride";
}//Ternary_Operators_Constructors Assignment

function Vote_Function(){
    var Age,can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18)?"You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML=Can_vote+" vote";
}//Ternary_Operators_Constructors Assignment

function Vehicle(Make,Model,Year,Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML="Eric drives a "+Erik.Vehicle_Color+" -colored "+Erik.Vehicle_Model+" manufactured in"+Erik.Vehicle_Year;
}//Coding Assignment

function Cat(Breed,Color,Age){
    this.Cat_Breed=Breed;
    this.Cat_Color=Color;
    this.Cat_Age=Age;
}
var Cheese=new Cat("nobreed","White",7);
var Cookie=new Cat("nobreed","black",6);
function newKeywordFuction(){
    document.getElementById("New_and_This").innerHTML="Cheese is a "+Cheese.Cat_Color+" "+Cheese.Cat_Age+" years old cute cat";
}

function count_Function(){
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count(){
        var Starting_point=20;
        function Plus_one(){Starting_point+=1;}
        Plus_one()
        return Starting_point;
    }
}//Nested Functions Assignment

