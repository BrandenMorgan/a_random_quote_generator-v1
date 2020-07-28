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
    year: 1996,
    tags: ["Movies", "Drama"]
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
    year: 1997,
    genre: "Romantic comedy"
  },
  {
    quote: "Chewie, we're home.",
    source: "Han Solo",
    citation: "Star Wars Episode VII: The Force Awakens",
    year: 2015,
    tags: ["Star Wars", "Harrison Ford", "Movies"],
    genre: "Action/adventure"
  },
  {
    quote: "We gonna party like it's your birthday.",
    source: "50 Cent",
    year: 2003,
    tags: ["Music", "pop culture"],
    genre: "Hip-hop/rap"
  },
  {
    quote: "The night is still young and so are we.",
    source: "Nicki Minaj",
    citation: "The Night Is Still Young",
    year: 2014,
    genre: "Hip-hop/rap"
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
    citation: "The Days",
    tags: ["Music", "Popular music"]

  }
];

// Generate a random index value to select an object in the quotes array.
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Access quote object properties and build an html string and display it to the page.
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;
  if ( randomQuote.citation ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  } if ( randomQuote.genre ) {
    html += `<span class="citation">${randomQuote.genre}</span>`;
  } if ( randomQuote.tags ) {
    html += `<span class="year">${randomQuote.tags.join(', ')}</span>`;
  }
  return document.getElementById('quote-box').innerHTML = html += `</p>`;
}

/* Automatically change the quote displayed to the screen every 10 seconds
https://www.w3schools.com/jsref/met_win_setinterval.asp */
setInterval(printQuote, 10000);

/* function to randomly update background color with every click
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
*/
function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return document.body.style.background = bgColor;
}
// Automatically change background color every 10 seconds along with quote
setInterval(randomBgColor, 10000);

// Activate click event listener to change quotes every time user clicks button.
document.getElementById('load-quote').addEventListener("click", printQuote, false);
