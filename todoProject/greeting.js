const formName = document.querySelector(".before2__div form");
const inputName = document.querySelector(".before2__div input");
const initialGreeting1 = document.querySelector(".inner__greeting__before");
const initialGreeting2 = document.querySelector(".inner__greeting__before2");
const answerName = document.querySelector(".deactivate");

function paintName(event) {
  event.preventDefault();
  const name = inputName.value;
  initialGreeting1.classList.add("deactivate");
  initialGreeting2.classList.add("deactivate");
  answerName.classList.remove("deactivate");
  answerName.classList.add("helloName");
  const h1 = document.createElement("h1");
  console.log(typeof name);
  h1.innerText = `G'day ${name}`;
  answerName.appendChild(h1);
}

formName.addEventListener("submit", paintName);
