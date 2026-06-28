// ============================================
// LUNNAN — Homepage interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Category / Bestsellers tabs ---------- */
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ---------- Tab arrow scroll (categories carousel) ---------- */
  const prevBtn = document.querySelector('.tab-arrows button[aria-label="Previous"]');
  const nextBtn = document.querySelector('.tab-arrows button[aria-label="Next"]');
  const categoryGrid = document.querySelector('.category-grid');

  if (prevBtn && nextBtn && categoryGrid) {
    const scrollAmount = 240;

    nextBtn.addEventListener('click', () => {
      categoryGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      categoryGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
    });
  }

  /* ---------- Product card quick interaction ---------- */
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('h3')?.textContent ?? 'Product';
      console.log(`Opening product: ${name}`);
    });
  });

  /* ---------- Smooth scroll for in-page anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

});