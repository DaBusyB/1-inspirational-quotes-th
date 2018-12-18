const pQuote = document.querySelector('.mainQuotePartOne');
const pSource = document.querySelector('.source');
const pCitation = document.querySelector('.quote-section .citation');
const pYear = document.querySelector('.year');
const body = document.querySelector('body');

let colorArr = ['coral', 'lightgray', 'cornflowerblue', 'crimson', 'darkorange', 'darkkhaki', 'lightseagreen', 'tomato', 'slateblue', 'violet', 'mediumseagreen', 'dodgerblue', 'darkolivegreen', 'black', 'aquamarine', 'darkseagreen']; 

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
    quote: "If you can't feed a hundred people, then feed just one...",
    source: "Mother Teresa",
  },
  {
    quote: "Just because you are happy it does not mean that the day is perfect, but that you have looked beyond its imperfections.",
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

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 7) + 1 
  // generate a random number and store it into a variable
  return quotes[randomNum] 
  // random number should return an random quote object from the quotes array 
}

function getRandomColor() {
  let randomColorNum = Math.floor(Math.random() * 16) + 1 
  // generate a random number and store it into a variable
  body.style.backgroundColor = colorArr[randomColorNum]  
  // random number should return an random background color from the colorArr
}

function printQuote() {
  getRandomColor() 
  //random background color
  let randomQuoteObj = getRandomQuote() 
  //random quote object stored in a variable
  document.querySelector('.mainQuotePartTwo').style.visibility = 'hidden'; //part two of main quote hidden
  
  pQuote.textContent = randomQuoteObj.quote; // new random quote generated
  pSource.textContent = randomQuoteObj.source; // source from random quote generated

  if (randomQuoteObj.citation) {
    pCitation.textContent = ", " + randomQuoteObj.citation;
  } else {
    pCitation.textContent = "";
  }

  if (randomQuoteObj.year) {
    pYear.textContent = ", " + randomQuoteObj.year;
  } else {
    pYear.textContent = "";
  }
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
