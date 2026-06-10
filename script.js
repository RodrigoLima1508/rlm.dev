// LOADING
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading').classList.add('hidden');
  }, 1200);
});

// NAVBAR SCROLL
var nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// MOBILE NAV
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');
toggle.addEventListener('click', function() {
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', function() {
    links.classList.remove('open');
  });
});

// SCROLL REVEAL
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});

// COUNTER ANIMATION
var counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-target'));
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(function(c) {
  counterObserver.observe(c);
});

function animateCounter(el, target) {
  var current = 0;
  var step = Math.ceil(target / 40);
  var timer = setInterval(function() {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current;
  }, 30);
}

// FAQ ACCORDION
document.querySelectorAll('.faq-item button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.parentElement;
    var open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(el) {
      el.classList.remove('open');
    });
    if (!open) item.classList.add('open');
  });
});

// MODAL
var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modalTitle');
var modalBody = document.getElementById('modalBody');

var projects = {
  malibu: {
    title: "Malibu Automotiva",
    html: [
      '<div class="preview" style="background:#1E293B;"></div>',
      '<div class="info">',
        '<p><strong>Categoria:</strong> Funilaria e Pintura Automotiva</p>',
        '<p><strong>Tecnologias:</strong> Next.js, TypeScript, Prisma, Tailwind CSS</p>',
        '<p>Site institucional completo com painel administrativo para gest&atilde;o de or&ccedil;amentos, dashboard financeiro, galeria de antes/depois, agendamento de servi&ccedil;os e &aacute;rea do cliente.</p>',
      '</div>',
      '<a href="https://malibua-auto.netlify.app/" class="btn btn-primary" target="_blank">Ver Site</a>'
    ].join('')
  },
  maison: {
    title: "Maison Essence",
    html: [
      '<div class="preview" style="background:#1E293B;"></div>',
      '<div class="info">',
        '<p><strong>Categoria:</strong> Loja Virtual de Perfumes</p>',
        '<p><strong>Tecnologias:</strong> React, Vite, CSS Modules</p>',
        '<p>E-commerce de perfumes importados e &aacute;rabes com cat&aacute;logo interativo, categorias, consultoria olfativa, compras via WhatsApp e frete para todo Brasil.</p>',
      '</div>',
      '<a href="https://maison-essence.netlify.app/" class="btn btn-primary" target="_blank">Ver Site</a>'
    ].join('')
  },
  primeodonto: {
    title: "Prime Odonto",
    html: [
      '<div class="preview" style="background:#1E293B;"></div>',
      '<div class="info">',
        '<p><strong>Categoria:</strong> Cl&iacute;nica Odontol&oacute;gica</p>',
        '<p><strong>Tecnologias:</strong> React, Vite, CSS Modules</p>',
        '<p>Site institucional para cl&iacute;nica odontol&oacute;gica premium com especialidades, equipe, depoimentos, FAQ interativo, agendamento online e integra&ccedil;&atilde;o com WhatsApp.</p>',
      '</div>',
      '<a href="https://prime-odonto.netlify.app/" class="btn btn-primary" target="_blank">Ver Site</a>'
    ].join('')
  }
};

function openProject(name) {
  var p = projects[name];
  if (p) {
    modalTitle.textContent = p.title;
    modalBody.innerHTML = p.html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modal.addEventListener('click', function(e) {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// BACK TO TOP
var totop = document.getElementById('totop');
window.addEventListener('scroll', function() {
  totop.classList.toggle('show', window.scrollY > 400);
});
totop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
