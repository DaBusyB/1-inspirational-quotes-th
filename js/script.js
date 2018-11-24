const pQuote = document.querySelector('.quote');
const source = document.querySelector('.source');
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');
const body = document.querySelector('body');

let quotes = [
  {
    quote: "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.",
    source: "M.L.K.",
  },
  {
    quote: "What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are.",
    source: "C.S. Lewis",
    citation: "The Magician's Nephew",
    year: 1955,
  },
  {
    quote: "If you can't feed a hundred people, then feed just one..",
    source: "Mother Teresa",
  },
  {
    quote: "Just because you are happy it does not mean that the day is perfect but that you have looked beyond its imperfections.",
    source: "Bob Marley ",
  },
  {
    quote: "A man is but the product of his thoughts; what he thinks, he becomes.",
    source: "Mahatma Ghandi",
  },
  {
    quote: "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king",
    source: "J.R.R. Tolkien",
    citation: "The Fellowship of the Ring",
    year: 1952,
  },
  {
    quote: "It is easier to build strong children than to repair broken men.",
    source: "Frederick Douglass",
    year: 1955,
  }
]

let colorArr = ['coral', 'lightgray', 'cornflowerblue', 'crimson', 'darkorange', 'darkkhaki', 'lightseagreen']

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 7) + 1 // generate a random number and store it into a variable
  return quotes[randomNum] // random number should return an random quote object from the quotes array
  body.style.backgroundColor = colorArr[randomNum] 
}

function getRandomColor() {
  let randomColorNum = Math.floor(Math.random() * 7) + 1 // generate a random number and store it into a variable
  return body.style.backgroundColor = colorArr[randomColorNum]  // random number should return an random background color from the colorArr
}



function printQuote() {
  getRandomColor()
  let randomNumFunc = getRandomQuote()
  document.querySelector('#mainQuotePartTwo').style.visibility = 'hidden';
  
  pQuote.textContent = randomNumFunc['quote'];
  source.textContent = randomNumFunc['source'];
  
  ".citation" ?
  citation.textContent = randomNumFunc['citation'] :
  null;

  ".year" ?
  year.textContent = randomNumFunc['year'] :
  null;
  
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
