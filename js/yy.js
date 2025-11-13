function getHitokoto() {
  fetch("https://yy.yumo.cc")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var hitokoto = data.hitokoto;
      var from = data.from;
      
      var input = document.querySelector('.search-box input, .search-container input');
      if(input) {
        var placeholderText = '"' + hitokoto + '"' + " — " + from;
        input.setAttribute('placeholder', '');
        typeWriter(input, placeholderText);
      }
    })
    .catch(error => {
      console.error('Error fetching Hitokoto:', error);
    });
}

function typeWriter(input, text) {
  if (input.typeWriterTimer) {
    clearInterval(input.typeWriterTimer);
  }
  
  var index = 0;
  var speed = 50;
  input.placeholder = '';
  
  input.typeWriterTimer = setInterval(function() {
    if (index < text.length) {
      input.placeholder += text.charAt(index);
      index++;
    } else {
      clearInterval(input.typeWriterTimer);
      input.typeWriterTimer = null;
    }
  }, speed);
}

window.addEventListener('load', function() {
  setTimeout(getHitokoto, 100);
});