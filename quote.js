const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    auther: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    auther: "Marilyn Monroe",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    auther: "Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    auther: "OFrank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    auther: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    auther: "Bernard M. Baruch",
  },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

//console.log(quotes[6 - 1]);
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

//console.log(quotes.length);

quote.innerText = todaysQuotes.quote;
auther.innerText = todaysQuotes.auther;
