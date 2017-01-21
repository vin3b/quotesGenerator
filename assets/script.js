

function btnQuoteFunc() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data:{
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
    success: function(response) {
      // so that changes only happen once successful response
      if (response.quoteAuthor) {
      $('#givenAuthor')[0].innerHTML = "- " + response.quoteAuthor;
    } else {
      $('#givenAuthor')[0].innerHTML = "- unknown";
    };
    $('#givenQuote')[0].innerHTML = response.quoteText;
    $('#givenQuote, #givenAuthor, .fa-quote-left, .fa-quote-right').fadeIn(500);
    randomColors();
    }
    });
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

btnQuote.addEventListener("click", function(event){
  event.preventDefault();
  $('#givenQuote, #givenAuthor, .fa-quote-left, .fa-quote-right').fadeOut(800);

  setTimeout(function(){
  btnQuoteFunc();
  }, 500);


});

// ask about this mouseover retaining it's color during the transition
$("#btnQuote").hover(function(){
  btnQuote.style.backgroundColor = newColor;
}, function(){
  btnQuote.style.backgroundColor = "white";
})


$(".tweetBtn").click( function(){
  var addToURL = $('#givenQuote')[0].innerHTML + $('#givenAuthor')[0].innerHTML;
  var tweetURL = "https://twitter.com/intent/tweet?hashtags=dopequotes&text="+addToURL;
  window.open(tweetURL);
});

// next projects
// figure how to add json quotes from another page
// see if you can get this on a motivational background for next project and make downloadable
// make this a fortune cookie quote generator
// screw it, if you can't fix the mouseover problem, leave it and move on. volume over quality to gain experience


// may want to change to changing background images
// also use an quote api to work this
