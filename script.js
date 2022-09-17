// get elements from HTML page
const contentTitle = document.querySelector(".contentTitle");
const content = document.querySelector(".content");
const jokesGeneratorBtn = document.querySelector(".jokesGeneratorBtn");

let author = "";
let quote = "";

const replaceWithNewContents = () => {
  // remove current content on HTML page
  content.innerHTML = "";
  contentTitle.innerHTML = "";

  // replace with new content on HTML page
  content.innerHTML = quote;
  contentTitle.innerHTML = author || "Unknown";
};

// function to get quotes using API
const getRandomQuote = (quotes) => {
  const totalQuotes = quotes.length;
  const randomQuoteIndex = Math.ceil(Math.random() * totalQuotes) - 1;
  const selectedQuote = quotes[randomQuoteIndex];

  author = selectedQuote.author;
  quote = selectedQuote.text;

  replaceWithNewContents();
};

// get random quote from webpage
const getQuote = async () => {
  const result = fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => data);

  getRandomQuote(await result);
};

jokesGeneratorBtn.addEventListener("click", getQuote);
