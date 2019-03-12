function reload(){
  window.location.href ="index.html"
}

function processWinner() {
  var parameters = location.search.substring(1).split('&');

  var temp = parameters[0].split('=');
  w = unescape(temp[1]);
  
  
  document.getElementById('winner').innerHTML = w;
}

processWinner();