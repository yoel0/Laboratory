const w = document.getElementsByClassName('w')[0];
const panels = document.getElementsByClassName('panels');

for (let i = 1; i < 500; i++) {
  w.innerHTML += "<div class='panels'></div>";
  const duration = Math.random() * 5;
  panels[i].style.animationDuration = 2 + duration +'s';
  panels[i].style.animationDelay = duration +'s';
};

const section = document.querySelector('section');
setTimeout(() => {
  section.classList.add('active')
}, 14000); // add class active after 14s