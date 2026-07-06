const modal = document.querySelector('.reserve-modal');
document.querySelectorAll('.reserve-trigger').forEach((button) => button.addEventListener('click', () => modal.showModal()));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.querySelector('#reserve-form');
form.querySelector('input[type="date"]').min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  modal.querySelector('.form-success').hidden = false;
});
