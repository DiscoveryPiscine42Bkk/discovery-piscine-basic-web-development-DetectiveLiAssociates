$(document).ready(function() {
    const $ball = $('#balloon');
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    let size = 200;
    let colorIndex = 0;

    function updateBalloon() {
      $ball.css({
        width: size + 'px',
        height: size + 'px',
        backgroundColor: colors[colorIndex]
      });
    }

    $ball.on('click', function() {
      size += 10;
      colorIndex = (colorIndex + 1) % colors.length;
      if (size > 420) {
        size = 200;
        colorIndex = 0;
      }
      updateBalloon();
    });

    $ball.on('mouseover', function() {
      size = Math.max(200, size - 5);
      updateBalloon();
    });

    updateBalloon(); // Initial setup
  });