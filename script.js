// Wishlist toggle and small interactivity
function initializeWishlistButtons() {
  const wishlistButtons = document.querySelectorAll('.wish');
  wishlistButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isActive = button.classList.toggle('active');
      button.textContent = isActive ? '❤️' : '🤍';
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const section = document.querySelector(targetId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initializeWishlistButtons();
  setupSmoothAnchors();
});
