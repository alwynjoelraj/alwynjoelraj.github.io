// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Button hover shadow effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    btn.style.transform = 'translateY(-2px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
    btn.style.transform = 'translateY(0)';
  });
});

// Optional: Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.id = 'backToTop';
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #2563EB;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 100;
  font-weight: 500;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide back to top button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
