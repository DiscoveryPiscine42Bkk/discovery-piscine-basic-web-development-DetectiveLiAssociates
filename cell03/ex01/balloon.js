    const ball=document.getElementById('balloon');
    const col=['#ff0000', '#00ff00', '#0000ff'];
    let size=200; let arrCol=0;

    function balloon() {
      ball.style.width=`${size}px`;
      ball.style.height=`${size}px`;
      ball.style.backgroundColor=col[arrCol];
    }

    ball.addEventListener('click', () => {
      size+=10;
      arrCol=(arrCol+1) % col.length;
      if (size > 420) {
        size=200; arrCol=0;
      }
      balloon();
    });

    ball.addEventListener('mouseover', () => {
      size=Math.max(200, size-5);
      balloon();
    });
