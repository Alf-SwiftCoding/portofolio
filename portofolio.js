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


// Define the texts for heading and paragraph
const headingText = "Hi, Welcome to My Website";
const paragraphText = `Thank you for taking the time to explore my work and professional journey. Here, you will find a showcase of my skills, projects, and experiences that reflect my dedication, creativity, and passion for excellence. I’m driven by a commitment to innovation and a focus on achieving impactful results. Whether you’re looking for a collaborator, a solution-oriented problem solver, or a creative mind with a technical edge, I hope this portfolio provides insight into what I can bring to your team. Please feel free to reach out I look forward to connecting with you and discussing how we can create something remarkable together.`;

let headingIndex = 0;
let paragraphIndex = 0;

function typeHeading() {
    const typingHeading = document.getElementById("typingHeading");

    // Append the next character in the heading text
    if (headingIndex < headingText.length) {
        typingHeading.innerHTML += headingText.charAt(headingIndex);
        headingIndex++;
        setTimeout(typeHeading, 50); // Adjust speed for heading typing effect
    } else {
        // Once heading is typed, start typing paragraph
        document.getElementById("typingTextContainer").style.display = "flex";
        typeParagraph();
    }
}

function typeParagraph() {
    const typingText = document.getElementById("typingText");

    // Append the next character in the paragraph text
    if (paragraphIndex < paragraphText.length) {
        typingText.innerHTML += paragraphText.charAt(paragraphIndex);
        paragraphIndex++;
        setTimeout(typeParagraph, 15);  // Adjust speed for paragraph typing effect
    }
}

// Start typing effect for the heading on page load
window.addEventListener("load", typeHeading);
