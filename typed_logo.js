//animate the cursor
function cursorAnimation() {
    $('#cursor').animate({
      opacity: 1
    }, 'fast', 'swing').animate({
      opacity: 0
    }, 'fast', 'swing');
  }
  
  
  //define text
  var text = 'Pattenden Construction Services';
  var done = false;
  var myInterval;
  
  //text is split up to letters
  function startAnimation() {
    while (!done) {
     $(document).ready(function() {
        myInterval = setInterval('cursorAnimation()', 1000); //setInterval to run the animation
        });
    $.each(text.split(''), function(i, letter) {
    //we add 100*i ms delay to each letter 
    setTimeout(function() {
      //we add the letter to the container
      $('#container').html($('#container').html() + letter);
    }, 200 * i);
  });
  done = true;
  
}
clearInterval(myInterval);
}

function endAnimation() {
    clearInterval(myInterval);
}

document.addEventListener('scroll', function() {
    startAnimation();
});