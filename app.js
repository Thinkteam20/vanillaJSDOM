const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function handleLoginButton() {
  const username = loginInput.value;

  /*
  if (username === "") {
    console.log("please write your name");
  } else if (username.length > 15) {
    console.log("user name is too long");
  }
  */
}

loginButton.addEventListener("click", handleLoginButton);
