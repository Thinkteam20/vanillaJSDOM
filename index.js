const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

const link = document.querySelector("a");

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function handleLink(e) {
  //alert("Click.");
  e.preventDefault();
  console.log(e);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);
