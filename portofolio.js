function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('open');
  
  // Add event listener to close menu when clicking outside
  if (menu.classList.contains('open')) {
      document.addEventListener('click', closeMenuOnOutsideClick);
  } else {
      document.removeEventListener('click', closeMenuOnOutsideClick);
  }
}

function closeMenuOnOutsideClick(event) {
  const menu = document.getElementById('navMenu');
  const menuButton = document.querySelector('.menu-btn');
  
  // Check if click was outside menu and button
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('open');
      document.removeEventListener('click', closeMenuOnOutsideClick);
  }
}

const popupButtons = document.querySelectorAll(".popup-btn");
const popups = document.querySelectorAll(".popup");

// Fungsi untuk menutup semua popup
function closeAllPopups() {
  popups.forEach(popup => {
    popup.style.display = "none";
  });
}

// Event untuk membuka popup yang sesuai
popupButtons.forEach(button => {
  button.addEventListener("click", () => {
    closeAllPopups(); // Tutup semua popup terlebih dahulu
    const popupId = button.getAttribute("data-popup"); // Ambil ID popup yang sesuai
    document.getElementById(popupId).style.display = "flex"; // Tampilkan popup yang sesuai
  });
});

// Event untuk tombol close pada setiap popup
popups.forEach(popup => {
  const closeBtn = popup.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // Sembunyikan popup saat tombol "×" ditekan
  });
});

// Menutup popup saat mengklik area luar konten popup
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    event.target.style.display = "none";
  }
});