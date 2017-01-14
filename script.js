var quotes = [];
//allows for additional quotes to be hardcoded in as needed - try doing this with requesting quotes from server later
quotes.push(["Some die at 25... we just don't bury them until 75", "Benjamin Franklin"]);
quotes.push(["You don't have to be great to start, but you have to start to be great", "Zig Ziglar"]);
quotes.push(["It doesn't matter how slowly you go, as long as you don't stop", "Confucious"]);
quotes.push(["Work hard in silence, let your success be your noise", "Frank Ocean"]);
quotes.push(["A ship is always safe at the shore, but that is not what it is built for", "Albert Einstein"]);
quotes.push(["The journey of a thousand miles begins with a single step", "Lao Tzu"]);
quotes.push(["Whether you think you can or you can't, you're right", "Henry Ford"]);
// if add quotes - change math random in btnQuoteFunc

var numQuote = 0;
function btnQuoteFunc() {
  numQuote = Math.floor(Math.random()*7);
  // change this Math function to account for number of quotes
  document.getElementById('givenQuote').innerHTML = quotes[numQuote][0];
  $("#givenAuthor")[0].innerHTML = "- " + quotes[numQuote][1];
}

var newColor = "";
var btnQuote = document.getElementById('btnQuote');
function randomColors() {
  var colors = ["#c45070", "#77af50", "#975dcf", "#5a60b1", "#d2af62"];
  function randomNum(){
    return Math.floor(Math.random()*5);
  }
  newColor = colors[randomNum()];
  document.getElementById('givenAuthor').style.color = document.getElementById('over').style.color = btnQuote.style.borderColor = document.body.style.backgroundColor = document.getElementById('givenQuote').style.color = newColor;
  var faColorChange = document.getElementsByClassName('fa');
  for (var i = 0; i < faColorChange.length; i++) {
    faColorChange[i].setAttribute("style", "color: " + newColor);
  }
}

//to get the first quote displayed
btnQuoteFunc();
randomColors();

btnQuote.addEventListener("click", function(){
  $('#givenQuote, #givenAuthor, .fa-quote-left, .fa-quote-right').fadeOut(500);
  setTimeout(function(){
  btnQuoteFunc();
  randomColors();
}, 500);
  $('#givenQuote, #givenAuthor, .fa-quote-left, .fa-quote-right').fadeIn("slow");
});

// ask about this mouseover retaining it's color during the transition
$("#btnQuote").hover(function(){
  btnQuote.style.backgroundColor = newColor;
}, function(){
  btnQuote.style.backgroundColor = "white";
})


$(".tweetBtn").click( function(){
  // so you need to create the url first right?
  var addToURL = "'" + quotes[numQuote][0] + "' - " + quotes[numQuote][1];
  var tweetURL = "https://twitter.com/intent/tweet?hashtags=dopequotes&text="+addToURL;
  window.open(tweetURL);
});


// next projects
// figure how to add json quotes from another page
// see if you can get this on a motivational background for next project and make downloadable
// make this a fortune cookie quote generator
