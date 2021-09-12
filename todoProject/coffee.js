const pick = [
  {
    img: "/img/coffee1.png",
    nameOfcoffee: "Latte",
  },
  {
    img: "/img/coffee2.png",
    nameOfcoffee: "Mocha",
  },
  {
    img: "/img/coffee3.png",
    nameOfcoffee: "Espresso",
  },
];

const coffeeImg = document.querySelector("#coffee img");
const coffeeName = document.querySelector("#coffee h4");

const todaysCoffee = pick[Math.floor(Math.random() * pick.length)];

coffeeImg.src = todaysCoffee.img;
coffeeName.innerHTML = todaysCoffee.nameOfcoffee;

// //console.log(quotes[6 - 1]);
// const todaysQuotes = pick[Math.floor(Math.random() * pick.length)];

// //console.log(quotes.length);

// coffeeImg.innerText = todaysQuotes.img;
// coffeeName.innerText = todaysQuotes.nameOfcoffee;
