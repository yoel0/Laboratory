let i = 0;

window.onload = setTimeout(() => {
  for (let j = 0; j <= 100; j += 2) {
  
    document.getElementById("samsara").innerHTML +=
    `<div class='square' style='width: ${j}vmin;
      height: ${j}vmin;
      z-index:  calc(100 - ${j});
      top: calc(50vh - ${j / 2}vmin);
      left: calc(50vw - ${j / 2}vmin);
      animation-delay: ${i}s;'>
      </div>`
    
    i += 0.1;
  }
}, 200);