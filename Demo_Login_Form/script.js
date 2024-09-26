function submit_form(){

    var u= document.getElementById("u1").value;
    var pw= document.getElementById("pw").value;

    var letters=/^[A-Za-z]+$/;
    var email_val=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(u==""||pw==""){
        alert("all fields are mandatory");
    }

    else if( document.getElementById("pw").value.length >12){
        alert("Password maximum length is 12");
    }

    else if(document.getElementById("pw").value.length <6){
        alert("password minimum length is 6");
    }

    else{
        alert("signup for creating new account")
    }
};

function create(){
    window.location="signup.html";
}


