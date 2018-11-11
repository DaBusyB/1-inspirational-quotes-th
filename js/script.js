/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


let quotes = [
  {
    quote: “There are far, far better things ahead than any we leave behind.”
    source: "C.S. Lewis"
    citation:
    year:
  },
  {
    quote: “What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are.”
    source: "C.S. Lewis"
    citation: "The Magician's Nephew"
    year:
  },
  {
    quote: “A proud man is always looking down on things and people; and, of course, as long as you are looking down, you cannot see something that is above you.”
    source: "C.S. Lewis"
    citation: "Mere Christianity"
    year:
  },
  {
    quote: “Don't use words too big for the subject. Don't say infinitely when you mean very; otherwise you'll have no word left when you want to talk about something really infinite.”
    source:
    citation:
    year:
  },
  {
    quote: “Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.”
    source:
    citation:
    year:
  },
]


“The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.”
/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
