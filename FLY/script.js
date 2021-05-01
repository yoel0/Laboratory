const text = document.querySelector('.text2');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

const animation = anime.timeline({
	targets: '.text2 span',
	easing: 'easeInOutExpo',
	loop: true,
});

animation.add({
	rotate: function() {
    return anime.random(-360,360)
  },
  translateX: function() {
    return anime.random(-90,90)
  },
  translateY: function() {
    return anime.random(-90,90)
  },
  duration: 3000,
  delay: anime.stagger(20),
})

.add({
	rotate: 0,
  translateX: 0,
  translateY: 0,
  duration: 2000,
  delay: anime.stagger(20),
});
