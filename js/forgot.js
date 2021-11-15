var mail = document.getElementById("exampleInputEmail1");
var error=document.getElementById("error");
let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
function validateemail() {
    //     if(mail.value.trim()==""){
    //     alert("Email cannot be empty");
    //     return false;
    // }
    // else if(pwd.value.trim()==""){
    //     alert("Password cannot be empty");
    //     return false;
    
    // }
    
    error.innerHTML="";
    if(regexp.test(mail.value)){
        mail.style.border="2px solid green";
        return true;
    }
    else{
    
        error.innerHTML="Please Enter a Valid email address";
        mail.style.border="2px solid red";
        return false;
    }
    }
    function validate(){
        if(validateemail()){
            return true;
        }
        else{
            return false;
        }
    }
    