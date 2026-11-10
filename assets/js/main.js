const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
  });
}
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-categories]');
filters.forEach(filter => filter.addEventListener('click', () => {
  const category = filter.dataset.filter;
  filters.forEach(other => other.setAttribute('aria-pressed', String(other === filter)));
  cards.forEach(card => {
    card.hidden = category !== 'all' && !card.dataset.categories.split(' ').includes(category);
  });
}));
document.querySelectorAll('[data-year]').forEach(element => element.textContent = String(new Date().getFullYear()));
