const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// convention uppercase variable is used when i want to save STRING

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //greeting.innerHTML = "Hello " + username;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLink(e) {
  //alert("Click.");
  e.preventDefault();
  console.log(e);
}

loginForm.addEventListener("submit", onLoginSubmit);
