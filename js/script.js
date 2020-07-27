/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// 'quotes' array of quote objects
const quotes = [
  {
    quote: "You complete me.",
    source: "Tom Cruise",
    citation: "Jerry Maguire",
    year: 1996
  },
  {
    quote: "I drink your milkshake!",
    source: "Daniel Day-Lewis",
    citation: "There Will Be Blood",
    year: 2007
  },
  {
    quote: "You make me want to be a better man.",
    source: "Jack Nicholson",
    citation: "As Good As It Gets",
    year: 1997
  },
  {
    quote: "Chewie, we're home.",
    source: "Han Solo",
    citation: "Star Wars Episode VII: The Force Awakens",
    year: 2015
  },
  {
    quote: "We gonna party like it's your birthday.",
    source: "50 Cent",
    year: 2003
  },
  {
    quote: "The night is still young and so are we.",
    source: "Nicki Minaj",
    citation: "The Night Is Still Young",
    year: 2014
  },
  {
    quote: "I got a sweet tooth that'll never come loose.",
    source: "Gym Class Heroes",
    citation: "Cookie Jar",
    year: 2008
  },
  {
    quote: "These are the days we'll never forget.",
    source: "Avicii",
    citation: "The Days"
  }
];

// Generate a random index value to select an object in the quotes array.
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randomNumber];
}

// Access quote object properties and build an html string.
function printQuote() {
  const quote = getRandomQuote();
  let html = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  if ( quote.citation ) {
    html += `<span class="citation">${quote.citation}</span>`;
  } if ( quote.year ) {
    html += `<span class="year">${quote.year}</span>`;
  }
  return html += `</p>`;
}

// Display the generated html in the browser in the "quote-box" div.
document.getElementById('quote-box').innerHTML = printQuote();

// Activate click event listener to change quotes every time user clicks button.
document.getElementById('load-quote').addEventListener("click", printQuote, false);
