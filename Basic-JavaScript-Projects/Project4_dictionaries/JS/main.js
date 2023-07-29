
function my_Dictionary(){
    var Animal={
        Species:"Cat",
        Color:"Black",
        Breed:"No Breed",
        Age:4,
        Sound:"Meow",
    
    };
    delete Animal.Sound;//Delete Assignment
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}//Dictionary Assignment

function my_DictionaryChallenge(){
    var Fruit={
        Name:"Apple",
        Color:"Red",
        Country:"US",
    };
    document.getElementById("DictionaryChallenge").innerHTML=Fruit.Color;
}//Dictionary Challenge

