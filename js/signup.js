var num = document.getElementById("mobile");
var mail = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");
var retype = document.getElementById("retype")
var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");


let phoneexp = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})|([0-9]{3})\.([0-9]{3})\.([0-9]{4})|([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
let pwdexp =new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([^A-Za-z0-9])?(?=.{8,})')

function validatetel() {
    error1.innerHTML = "";

    if (phoneexp.test(num.value)) {
        num.style.border = "2px solid green";
        return true;
    }
    else {

        error1.innerHTML = "Please Enter a Valid mobile number";
        num.style.border = "2px solid red";
        return false;
    }
}
function validateemail() {
    //     if(mail.value.trim()==""){
    //     alert("Email cannot be empty");
    //     return false;
    // }
    // else if(pwd.value.trim()==""){
    //     alert("Password cannot be empty");
    //     return false;

    // }

    error.innerHTML = "";
    if (regexp.test(mail.value)) {
        mail.style.border = "2px solid green";
        return true;
    }
    else {

        error.innerHTML = "Please Enter a Valid email address";
        mail.style.border = "2px solid red";
        return false;
    }
}

let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

function StrengthChecker(PasswordParameter) {
    // We then change the badge's color and text based on the password strength

    if (strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if (mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange'
        strengthBadge.textContent = 'Medium'
    } else {
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display = 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if (password.value.length !== 0) {
        strengthBadge.style.display != 'block'
    } else {
        strengthBadge.style.display = 'none'
    }
});
function validateretype() {
    error2.innerHTML = "";
    if (pwdexp.test(retype.value)) {
        retype.style.border = "2px solid green";
        return true;
    }
    else {

        error2.innerHTML = "Please Enter a Valid password";
        retype.style.border = "2px solid red";
        return false;
    }
}



function validate() {
    if (validateemail() && ((strengthBadge.textContent == 'Strong') || (strengthBadge.textContent == 'Medium'))&&validateretype()) {
        return true;
    }
    else {
        return false;
    }
}