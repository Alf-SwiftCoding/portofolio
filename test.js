// Ambil semua elemen popup dan tombol
const buttons = document.querySelectorAll('.button');
const popups = document.querySelectorAll('.popup-box');
const closeButtons = document.querySelectorAll('.close');

// Fungsi untuk menampilkan popup
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    
    // Sembunyikan semua popup sebelum menampilkan yang dipilih
    popups.forEach(p => p.style.display = 'none');
    popup.style.display = 'block'; // Tampilkan popup yang sesuai
  });
});

// Fungsi untuk menutup popup
closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const popup = closeButton.closest('.popup-box');
    popup.style.display = 'none'; // Sembunyikan popup
  });
});

// Menutup popup jika area luar popup diklik
window.addEventListener('click', (event) => {
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
