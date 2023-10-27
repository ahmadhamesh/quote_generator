const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random";

async function getQuote(url){
	const responce = await fetch(url);
	var data = await responce.json();
	console.log(data);
	quote.innerHTML = data.content; //this comes from console data where quotes are writthen in API content
	author.innerHTML = data.author;

}

getQuote(api_url);

function tweet() {
	window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by" + author.innerHTML, "Tweet Window", "width=600, height= 300 ");
}