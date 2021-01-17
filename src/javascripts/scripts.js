import { tns } from 'tiny-slider/src/tiny-slider';
import L from 'leaflet';
import AOS from 'aos';

const slider = tns({
  container: '.my-slider',
  items: 1,
  autoplay: true,
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

const map = L.map('map', {
  renderer: L.canvas(),
  center: L.latLng(50.26, 19.02),
  zoom: 10,
});

const myRenderer = L.canvas({ padding: 0.5 });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.circle([50.26, 19.02], {
  color: 'red',
  fillColor: '#f03',
  radius: 50000,
  renderer: myRenderer,
}).addTo(map);

setTimeout(() => {
  map.invalidateSize();
}, 500);

map.invalidateSize();

AOS.init({
  startEvent: 'load',
  once: false,
});
