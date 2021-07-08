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
