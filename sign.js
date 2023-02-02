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
let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
})