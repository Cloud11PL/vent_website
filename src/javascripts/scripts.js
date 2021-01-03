import { tns } from 'tiny-slider/src/tiny-slider';
// import gsap from 'gsap';

const slider = tns({
  container: '.my-slider',
  items: 1,
  autoplay: false,
  autoplayHoverPause: true,
  autoplayTimeout: 20000,
  autoplayButtonOutput: false,
  controlsContainer: '#slider_controls',
  speed: 500,
  preventActionWhenRunning: true,
  animateDelay: 1500,
});

slider.play();

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  navbar.classList.toggle('fixed', window.scrollY > 48);
});

// const elements = (index) => document.getElementsByClassName('slide_wrapper_header')[index];
// const contentElements = (index) => document.getElementsByClassName(
//   'slide_wrapper_content',
// )[index];
// const hrElements = (index) => document.querySelectorAll('div.slide_wrapper > hr')[index];
// const btnElements = (index) => document.querySelectorAll('div.slide_wrapper > button')[index];

const toggleMenu = () => {
  const menu = document.querySelector('#menu');
  if (menu.style.left === '0px') {
    menu.style.left = '-100%';
  } else if (menu.style.left === '-100%') {
    menu.style.left = '0px';
  } else {
    menu.style.left = '0px';
  }
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    toggleMenu();
  });
});

document.querySelector('#check').addEventListener('change', () => {
  toggleMenu();
});

// slider.events.on('transitionStart', () => {
//   let index = slider.getInfo().navCurrentIndex;
//   if (document.getElementsByClassName('slide_wrapper').length === index) {
//     index = 0;
//   } else {
//     index += 1;
//   }

//   // gsap.set(elements(index), {
//   //   duration: 0.5,
//   //   opacity: 0,
//   //   y: -50,
//   // });

//   // gsap.to(elements(index), {
//   //   duration: 0.5,
//   //   opacity: 1,
//   //   y: 0,
//   // });

//   // gsap.from(hrElements(index), {
//   //   duration: 0.5,
//   //   opacity: 0,
//   //   y: -50,
//   //   delay: 0.5,
//   // });

//   // gsap.from(contentElements(index), {
//   //   duration: 0.5,
//   //   opacity: 0,
//   //   y: -50,
//   //   delay: 1,
//   // });

//   // gsap.from(btnElements(index), {
//   //   duration: 1,
//   //   opacity: 0,
//   //   y: -50,
//   //   delay: 1.2,
//   // });
// });

// // slider.events.on('transitionEnd', () => {
// //   gsap.from(elements, {
// //     duration: 1,
// //     opacity: 1,
// //     y: -50,
// //   });
// // });

// // gsap.to('#temp_animate', {
// //   opacity
// // })
