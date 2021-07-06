const selectedNumberRange = document.querySelector("#form1");
const selectedNumberRange2 = document.querySelector("#form2");
const input1 = selectedNumberRange.querySelector("input");
const input2 = selectedNumberRange2.querySelector("input");
const button = selectedNumberRange2.querySelector("button");
const result = document.getElementById("result");
let p1 = selectedNumberRange2.querySelector("p");

console.log(result);

const results = ["You won", "You lost"];

const SELECTED_RANGE_KEY = "selected_range";
const YOUR_SELECT = "your_select";

//console.dir(p1.innerText);

function onSetNumber() {
  let inputVal = input1.value;
  let inputVal2 = input2.value;
  localStorage.setItem(SELECTED_RANGE_KEY, input1.value);
  localStorage.setItem(YOUR_SELECT, input2.value);
}

function guessingGenerator(e) {
  e.preventDefault();
  GuessNumber = Math.floor(
    Math.random() * localStorage.getItem(SELECTED_RANGE_KEY)
  );

  p1.className = "";
  p1.innerText = `You choose: ${localStorage.getItem(
    YOUR_SELECT
  )} the machine choose: ${GuessNumber}`;

  const number = parseInt(localStorage.getItem(YOUR_SELECT));

  console.log(typeof number);
  console.log(typeof GuessNumber);

  if (number === GuessNumber) {
    //console.log("you Won");
    result.classList.remove("hidden");
    result.innerText = results[0];
  } else {
    //console.log("you lost");
    result.classList.remove("hidden");
    result.innerText = results[1];
  }
}

input1.addEventListener("change", onSetNumber);
input2.addEventListener("change", onSetNumber);
button.addEventListener("click", guessingGenerator);
