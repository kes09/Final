"use strict";

let formRegistration = document.getElementById("form-registration");
let strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let name= document.getElementById("name").value;

  if (name == "") {
    errors.name = "Please enter your name";
  }

  let surname = document.getElementById("surname").value;

  if(surname == ""){ 
    errors.surname = "Please enter your surname";
  }

  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;

  if (password1 == "") {
    errors.mypassword = "Please enter your password";
  }else if(!password1.match(strongRegex)){
    errors.mypassword = "Weak Password, enter 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
  }

  if (password1 != password2) {
    errors.mypassword2 = "Please make sure your passwords match";
  }

  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "Please agrre terms ";
  }
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "Please mark your age";
  }
  let emailValue = document.getElementById("email").value;

  if (emailValue == "") {
    errors.email = "Please enter your email";
  }else if(!emailValue.match(emailPattern)){
    errors.email="Please enter your email addres in format: yourname@example.com";
  }
 
let emaielField = document.getElementById("email");
emaielField.addEventListener("focus", function () {
  emaielField.style.outline = "none";
});

emaielField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let spanErrorText = document.getElementById("error_email");
  if (emailValue.match(emailPattern)) {
    spanErrorText.innerText = "Valid email";
    spanErrorText.style.color = "green";
    emaielField.style.border = "2px solid green";
  } else {
    spanErrorText.innerText = "Please enter your email addres in format: yourname@example.com";
    spanErrorText.style.color = "#cc0000";
    emaielField.style.border = "2px solid red";
  }
});
    let myInput = document.getElementById("passw1");
    let errorPass = document.getElementById('error_mypassword');
    myInput.addEventListener('keyup', function(){
      if(myInput.value.match(strongRegex)) {  
          errorPass.innerText = 'Strong Password'
          errorPass.style.color = 'green' ;
        } else {
          errorPass.innerText = 'Weak Password, enter 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
          errorPass.style.color = 'red' ;
        }
      })
      
  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for(let item in errors){
    console.log(item);

    let spanError= document.getElementById("error_" + item );
    
    if(spanError){
      spanError.innerText = errors[item];
    }
  }
  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// togglr Show/hide
let passwordInputs = document.querySelectorAll(".password-input");
let toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach(function (toggleIcon, i) {
  toggleIcon.addEventListener("click", function () {
    if (passwordInputs[i].type === "password") {
      passwordInputs[i].setAttribute("type", "text");
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    } else {
      passwordInputs[i].setAttribute("type", "password");
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    }
  });
});