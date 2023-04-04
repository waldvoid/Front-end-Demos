document.addEventListener("DOMContentLoaded", function () {
  const listItemList = document.getElementsByTagName("li");
  const inputList = document.getElementsByTagName("input");
  const signUpButton = document.getElementById("signup-button");
  const signUpForm = document.getElementById("signup-form");
  let isSignUpFormValid = false;

  function checkInputValidity(i) {
    // check input validity
    if (inputList[i].checkValidity()) {
      // if valid, remove error status
      listItemList[i].classList.remove("error");
      listItemList[i].classList.remove("email");
      listItemList[i].classList.remove("text");
      listItemList[i].style.setProperty("--before-content", "");
      inputList[i].setAttribute("aria-invalid", "false");
      isSignUpFormValid = true;
    } else {
      // if not valid add error status and ...
      // email ? put email input field error message status
      if (inputList[i].type === "email") {
        listItemList[i].classList.add("email");
      } else {
        // other input field ? fillable error message
        listItemList[i].classList.add("text");
        // fill before content with placeholder information
        listItemList[i].style.setProperty(
          "--before-content",
          `"${inputList[i].placeholder} cannot be empty"`
        );
      }
      listItemList[i].classList.add("error");
      inputList[i].setAttribute("aria-invalid", "true");
      isSignUpFormValid = false;
    }
  }

  // check input validation
  for (let i = 0; i < inputList.length; i++) {
    // check input & focus on inputs
    inputList[i].addEventListener("input", function () {
      inputList[i].addEventListener("blur", function () {
        checkInputValidity(i);
      });
    });
  }

  // check submit
  signUpButton.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let i = 0; i < inputList.length; i++) {
      checkInputValidity(i);
    }
  });

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let i = 0; i < inputList.length; i++) {
      checkInputValidity(i);
    }
  });
});
