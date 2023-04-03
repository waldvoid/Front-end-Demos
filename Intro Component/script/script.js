document.addEventListener("DOMContentLoaded", function () {
  const listItemList = document.getElementsByName("li");
  const inputList = document.getElementsByName("input");

  // opacity & margin manage event listener
  // check input validation
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("input", function () {
      if (inputList[i].checkValidity()) {
        listItemList[i].classList.remove("error");
      } else {
        listItemList[i].classList.add("error");
      }
    });
  }

  inputValidition.addEventListener("input", function () {
    if (emailValidation.checkValidity()) {
      emailInvalidError.style.opacity = "1";
      emailInvalidError.style.margin = ".5em 0 1.5em 0";
    } else {
      emailInvalidError.style.opacity = "0";
      emailInvalidError.style.margin = "0";
    }
  });

  // check user focus on input
  emailValidation.addEventListener("blur", function () {
    if (!emailValidation.checkValidity()) {
      emailInvalidError.style.opacity = "1";
      emailInvalidError.style.margin = ".5em 0 1.5em 0";
      // error message
      document.getElementById("email-invalid").innerHTML =
        "Please provide a valid email address";
      // screen-reader aria attribute error message
      document
        .getElementById("email-invalid")
        .setAttribute("aria-describedby", "Invalid Email Adress");
    } else {
      emailInvalidError.style.opacity = "0";
      emailInvalidError.style.margin = "0";
    }
  });
  emailInvalidError.style.transition = "all 0.5s ease-in-out";
});
