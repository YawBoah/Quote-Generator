const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random"

async function getcode(url){
   const response = await fetch(url);
   var data = await response.json();
   
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

getcode(api_url);