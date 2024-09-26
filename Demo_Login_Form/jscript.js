function create_account(){
    var n= document.getElementById("n1").value;
    var e= document.getElementById("e1").value;
    var p= document.getElementById("p1").value;
    var cp= document.getElementById("cp1").value;

    var letters=/^[A-Za-z]+$/;
    var email_val=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(n==""|| e=="" ||p=="" ||cp==""){
        alert("Enter each details correctly!");
    }

    else if(!letters.test(n)){
        alert("Name is incorrect must contain alphabets only");
    }

    else if (!email_val.test(e)){
        alert("invalid email Please enter valid email id");
    }

    else if(p!=cp){
        alert("Password not matching");
    }

    else if( document.getElementById("p1").value.length >12){
        alert("Password maximum length is 12");
    }

    else if(document.getElementById("p1").value.length <6){
        alert("password minimum length is 6");
    }

    else{
        alert("Your account has been created successfully... Redirecting to Application.com");
        window.location="https://www.google.com"; //demo url
    }
};