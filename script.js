const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

// Toggle menu saat tombol ☰ diklik
menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// Auto tutup menu saat klik salah satu link menu
document.querySelectorAll("#navbarMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// Auto tutup menu kalau klik di luar navbar
document.addEventListener("click", (e) => {
  if (!navbarMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
