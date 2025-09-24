// Get the mobile menu and hamburger icon
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const closeMenu = document.getElementById('closeMenu');

// Toggle the mobile menu visibility when clicking the hamburger icon
mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close the mobile menu when clicking the close (X) button
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
