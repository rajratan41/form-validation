const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
let flag = 1;

function validateForm() {
  if (username.value == "") {
    userError.innerText = "User Name is Required";
    flag = 0;
  } else if (username.value.length < 3) {
    userError.innerText = "User Name must be atleast 3 character";
    flag = 0;
  } else {
    userError.innerText = "";
    flag = 1;
  }
  if (password.value == "") {
    passError.innerText = "Password is Required";
    flag = 0;
  } else if (password.value.length < 6) {
    passError.innerText = "Password must be atleast 6 character";
    flag = 0;
  } else {
    passError.innerText = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}
