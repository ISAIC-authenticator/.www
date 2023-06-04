document.addEventListener('DOMContentLoaded', function () {
  // Hamburger actions
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');
  const slideInMenu = document.querySelector('.slide-in-menu');
  const sections = document.querySelectorAll('.section');
  const footer = document.querySelector('footer');
  const body = document.querySelector('body');

  hamburger.addEventListener('click', function () {
    slideInMenu.classList.toggle('active-menu');
    sections.forEach(function (section) {
      section.classList.toggle('active-menu');
    });
    footer.classList.toggle('active-menu');
    hamburger.classList.toggle('hamburger--3dx');
    body.classList.toggle('noscroll');
  });

  sections.forEach(function (section) {
    section.addEventListener('click', function () {
      slideInMenu.classList.remove('active-menu');
      sections.forEach(function (section) {
        section.classList.remove('active-menu');
      });
      footer.classList.remove('active-menu');
      hamburger.classList.remove('hamburger--3dx');
      body.classList.remove('noscroll');
    });
  });

  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
      sections.forEach(function (section) {
        section.classList.remove('active-menu');
      });
      footer.classList.remove('active-menu');
      slideInMenu.classList.remove('active-menu');
      hamburger.classList.remove('hamburger--3dx');
      body.classList.remove('noscroll');
    });
  });
});

window.addEventListener('scroll', function () {
  const topLogo = document.querySelector('.top-logo');
  const botLogo = document.querySelector('.bot-logo');
  const header = document.querySelector('.header');

  if (window.pageYOffset > 400) {
    topLogo.classList.add('page-scrolled');
    botLogo.classList.add('page-scrolled');
    header.classList.add('page-scrolled');
  } else {
    topLogo.classList.remove('page-scrolled');
    botLogo.classList.remove('page-scrolled');
    header.classList.remove('page-scrolled');
  }
});

// Slider JS
let slideIndex = 1;
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function transitionSlides() {
  setInterval(function () {
    plusSlides(1);
  }, 7000);
}

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = 'block';
  }

  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += ' active';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Accordion Javascript
  const acc = document.getElementsByClassName('faqs__dropdown-toggle');
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');

      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

  showSlides(slideIndex);
  transitionSlides();
});
