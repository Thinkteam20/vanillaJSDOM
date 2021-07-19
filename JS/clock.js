/*
const clock = document.querySelector("h2.clock");
const countDownDate = new Date("Dec 24, 2021 00:00:00").getTime();

function timeCounter() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  //console.log(typeof hours);
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  // built-in js function padStart will reform the string
  // take two argument first length of string, second what will be filled
  // in this case, when seconds became less than 10 it show one single number to the user which does not look good
  // so we add "0"
  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

timeCounter();
setInterval(timeCounter, 1000);
*/
let date = new Date();

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();
