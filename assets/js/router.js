// ─── PAGE ROUTER ───
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
  const nav = document.querySelector('.nav-links');
  if (nav.classList.contains('open')) toggleMobileNav();
}

function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
  document.querySelector('.nav-burger').classList.toggle('open');
}
