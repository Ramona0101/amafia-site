// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      mainNav.classList.remove('open');
    }
  });
});

// Init AOS (Scroll Reveal)
AOS.init({ duration: 800, once: true });

// Init Lottie animation (wave.json no mesmo diretório)
lottie.loadAnimation({
  container: document.getElementById('wave'),
  path: 'wave.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});