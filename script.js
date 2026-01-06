// =========================
// script.js
// =========================

// ganti jenjang (SD / SMP / SMA / Kuliah)
function showJenjang(id) {
  const jenjangs = document.querySelectorAll('.jenjang');
  jenjangs.forEach(j => j.classList.remove('active'));

  document.getElementById(id).classList.add('active');
}

// ambil elemen menu
const menuButton = document.querySelector('.menu-button');
const collapseMenu = document.getElementById('collapseMenu');
const closeButton = document.querySelector('.close-menu');

// buka menu
menuButton.addEventListener('click', () => {
  collapseMenu.classList.add('active');
});

// tutup menu
closeButton.addEventListener('click', () => {
  collapseMenu.classList.remove('active');
});

// BIAR LINK DI DALAM MENU BISA DIKLIK
document.querySelectorAll('#collapseMenu a').forEach(link => {
  link.addEventListener('click', () => {
    // biarin link jalan dulu
    setTimeout(() => {
      collapseMenu.classList.remove('active');
    }, 300);
  });
});

