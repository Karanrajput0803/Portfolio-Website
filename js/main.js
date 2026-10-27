// Typewriter role text
const roles = ["CSE Student", "Aspiring Software Developer", "Creative Problem Solver"];
const typedEl = document.getElementById('typed');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typedEl.textContent = roles[0];
} else {
  let r = 0, c = 0, deleting = false;
  (function tick() {
    const word = roles[r];
    typedEl.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(tick, 70); }
    else if (!deleting) { deleting = true; setTimeout(tick, 1600); }
    else if (c > 0) { c--; setTimeout(tick, 35); }
    else { deleting = false; r = (r + 1) % roles.length; setTimeout(tick, 300); }
  })();
}

// Cursor spotlight
const spot = document.getElementById('spot');
if (matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', e => { spot.style.left = e.clientX + 'px'; spot.style.top = e.clientY + 'px'; });
} else { spot.style.display = 'none'; }

// Theme toggle
const root = document.documentElement;
document.getElementById('themeBtn').addEventListener('click', () => {
  root.setAttribute('data-theme', root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn'), navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
