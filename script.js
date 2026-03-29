// ==========================
// Responsive Navigation Toggle
// ==========================
const navToggle = document.querySelector('.nav-toggle'); // button or hamburger icon
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ==========================
// Smooth Scrolling for Anchor Links
// ==========================
const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // adjust for sticky header
        behavior: 'smooth'
      });
    }

    // Close nav menu on mobile after click
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// ==========================
// Optional: Active Link Highlighting on Scroll
// ==========================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 70; // adjust for header height

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id');
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
