// =========================
// script.js
// =========================
function showJenjang(id) {
  const jenjangs = document.querySelectorAll('.jenjang');
  jenjangs.forEach(j => j.classList.remove('active'));

  document.getElementById(id).classList.add('active');
}

function toggleMenu() {
  const menu = document.getElementById('collapseMenu');
  menu.classList.toggle('active');
}

