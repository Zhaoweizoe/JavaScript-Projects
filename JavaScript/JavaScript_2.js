console.log("Script executed successfully.");

function validateForm(){
    let fname=document.getElementById("fname").value;
    let f=lname=document.getElementById("lname").value;

    if(fname===""||lname===""){
        alert("Both first name and last name must be filled out");
        return false;
    }
}