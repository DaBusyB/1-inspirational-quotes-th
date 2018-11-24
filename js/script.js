const pQuote = document.querySelector('.quote');
const source = document.querySelector('.source');
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');

let quotes = [
  {
    quote: "There are far, far better things ahead than any we leave behind.",
    source: "C.S. Lewis",
    citation: "Letter to Mary Willis Shelburne",
    year: 1963,
  },
  {
    quote: "What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are.",
    source: "C.S. Lewis",
    citation: "The Magician's Nephew",
    year: 1955,
  },
  {
    quote: "A proud man is always looking down on things and people; and, of course, as long as you are looking down, you cannot see something that is above you.",
    source: "C.S. Lewis",
    citation: "Mere Christianity",
    year: 1952,
  },
  {
    quote: "Don't use words too big for the subject. Don't say infinitely when you mean very; otherwise you'll have no word left when you want to talk about something really infinite.",
    source: "C.S. Lewis",
    citation: "Letter to Joan Lancaster",
    year: 1956,
  },
  {
    quote: "Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.",
    source: "C.S. Lewis",
    citation: "Miracles",
    year: 1942,
  },
  {
    quote: "If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world.",
    source: "C.S. Lewis",
    citation: "Mere Christianity",
    year: 1952,
  },
  {
    quote: "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.",
    source: "C.S. Lewis",
    citation: "The Screwtape Letters",
    year: 1942,
  }
]


function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 7) + 1 // generate a random number and store it into a variable
  return quotes[randomNum] // random number should return an random quote object from the quotes array
}


function printQuote() {
  //let quoteHTML = document.querySelector('');
  let randomNumFunc = getRandomQuote() // call the `getRandomQuote` function and assign it to a variable.
  //let quoteString = "<p>randomNumFunc['quote'] <span>randomNumFunc['source']</span> </p>" // use the properties of the quote object stored in the variable to create your HTML string.
  pQuote.textContent = randomNumFunc['quote'];
  source.textContent = randomNumFunc['source'];
  
  randomNumFunc['citation'] ?
  citation.textContent = randomNumFunc['citation'] :
  null;

  randomNumFunc['year'] ?
  year.textContent = randomNumFunc['year'] :
  null;
  // use conditionals to make sure the optional properties exist before they are added to the HTML string.
  // set the `innerHTML` of the `quote-box` div to the HTML string.
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
