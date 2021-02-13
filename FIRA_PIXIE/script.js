let pixie = 0;
const c = document.querySelector('canvas');
const muwah = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener(
  'resize',
  () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  },
  false
);

const draw = () => {
  muwah.globalCompositeOperation = 'source-over';
  muwah.fillStyle = 'hsla(0, 0%, 0%, 1)';
  muwah.fillRect(0, 0, c.width, c.height);
  
  let recipe, i, r2;

  recipe = Math.sin(pixie) * 2 * Math.PI;

  for (i = 0; i < 275; ++i) {
    r2 = 120 * Math.sin(i * recipe);
    muwah.globalCompositeOperation = '';
    muwah.fillStyle = `hsla(${i + 50}, 100%, 50%, 1)`;
    muwah.beginPath();
    muwah.arc(
      Math.sin(i) * r2 + c.width / 2,
      Math.cos(i) * r2 + c.height / 2,
      1.5,
      0,
      Math.PI * 2
    );

    muwah.fill();
  }
  pixie += 0.00007;
  return(pixie %= 2 * Math.PI);
}

const init = () => {
  window.requestAnimationFrame(init);
  draw();
}

init();