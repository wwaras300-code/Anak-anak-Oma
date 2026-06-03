// ================================================
// main.js — Anak-Anak Oma
// ================================================

// ------------------------------------------------
// 1. NAVBAR TOGGLE (Mobile hamburger menu)
// ------------------------------------------------
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  // Tutup menu saat link diklik
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
    });
  });
}

// ------------------------------------------------
// 2. SMOOTH ACTIVE LINK saat scroll
// ------------------------------------------------
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navItems.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ------------------------------------------------
// 3. FADE-IN animasi saat scroll (Intersection Observer)
// ------------------------------------------------
const fadeElements = document.querySelectorAll(
  '.member-card, .stat-box, .about-text, .hero-content'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
