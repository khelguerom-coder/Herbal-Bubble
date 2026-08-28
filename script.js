const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const toast = document.getElementById('toast');
const form = document.getElementById('feedback-form');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3400);
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const entry = {
    nombre: data.get('nombre'),
    edad: data.get('edad'),
    interes: data.get('interes'),
    precio: data.get('precio'),
    comentario: data.get('comentario'),
    fecha: new Date().toISOString()
  };

  const stored = JSON.parse(localStorage.getItem('herbalBubbleFeedback') || '[]');
  stored.push(entry);
  localStorage.setItem('herbalBubbleFeedback', JSON.stringify(stored));

  form.reset();
  showToast('¡Gracias! Tu feedback fue registrado en este dispositivo.');
});
