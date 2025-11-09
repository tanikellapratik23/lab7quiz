'use strict';

const carouselItems = document.querySelectorAll('.carousel-item');
const navItems = document.querySelectorAll('.nav-item');
const carouselNav = document.querySelector('.carousel-nav');

carouselNav.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nav-item')) return;

  const clickedIndex = Array.from(navItems).indexOf(e.target);
  const activeIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));

  if (clickedIndex === activeIndex) return; // do nothing if already active

  // Deactivate current
  carouselItems[activeIndex].classList.remove('active');
  navItems[activeIndex].classList.remove('active');

  // Activate clicked
  carouselItems[clickedIndex].classList.add('active');
  navItems[clickedIndex].classList.add('active');
});
