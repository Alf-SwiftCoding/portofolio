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