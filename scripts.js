// year in footer
const getYear = () => new Date().getFullYear().toString();
document.getElementById('year').innerHTML = getYear();

// navigation
const menu = document.querySelector('.nav-links');
const hamburger = document.querySelector('#hamburger');

// click events
hamburger.addEventListener('click', function() {
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  }
  if (menu.classList.contains('slide-out')) {
    menu.classList.remove('slide-out');
    menu.classList.add('slide-in');
  } else if (menu.classList.contains('slide-in')) {
    menu.classList.remove('slide-in');
    menu.classList.add('slide-out');
  } else {
    menu.classList.add('slide-in');
  }
});

// resize events
window.addEventListener('resize', function() {
  if (window.innerWidth > 970) {
    menu.classList.remove('hide');
    menu.classList.remove('slide-in');
    menu.classList.remove('slide-out');
  } else {
    menu.classList.remove('slide-out');
    menu.classList.remove('slide-in');
    menu.classList.add('hide');
  }
});

