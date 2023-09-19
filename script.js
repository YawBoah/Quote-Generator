const api_url = "https://api.quotable.io/random"

async function getcode(url){
   const response = await fetch(url);
   var data = await response.json();
   console.log(data);
}

getcode(api_url);