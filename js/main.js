/**
 * OpenVisus Website - Main JavaScript
 */

(function () {
  'use strict';

  // Load shared footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        footerPlaceholder.outerHTML = html;
      })
      .catch(function () {
        footerPlaceholder.outerHTML = '<footer class="footer"><div class="container"><p class="footer-copy">© OpenVisus · BSD License</p></div></footer>';
      });
  }

  // Theme toggle
  const THEME_KEY = 'openvisus-theme';
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const themeIconSun = document.querySelector('.theme-icon-sun');
  const themeIconMoon = document.querySelector('.theme-icon-moon');

  function getTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
    if (themeIconSun) themeIconSun.style.display = theme === 'dark' ? '' : 'none';
    if (themeIconMoon) themeIconMoon.style.display = theme === 'light' ? '' : 'none';
  }

  function initTheme() {
    const theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
    if (themeIconSun) themeIconSun.style.display = theme === 'dark' ? '' : 'none';
    if (themeIconMoon) themeIconMoon.style.display = theme === 'light' ? '' : 'none';
  }

  if (themeToggle) {
    initTheme();
    themeToggle.addEventListener('click', function () {
      const current = getTheme();
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close menu when clicking a link (for mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Smooth scroll for anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Navbar background on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    function updateNavBackground() {
      const scrolled = window.scrollY > 50;
      nav.style.background = scrolled
        ? 'var(--color-nav-bg-scrolled)'
        : 'var(--color-nav-bg)';
    }

    window.addEventListener('scroll', updateNavBackground);
    updateNavBackground();
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Formspree handles the actual submission
      // Check if form action is still placeholder
      const action = contactForm.getAttribute('action');
      if (action && action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        alert(
          'Contact form is not configured yet. Please replace YOUR_FORM_ID in support.html with your Formspree form ID, or use another form backend.'
        );
      }
    });
  }
})();
