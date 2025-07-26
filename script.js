// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Initialize dark mode from localStorage if previously set
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️";
  darkModeToggle.setAttribute("aria-pressed", "true");
} else {
  darkModeToggle.textContent = "🌙";
  darkModeToggle.setAttribute("aria-pressed", "false");
}

darkModeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");

  if (isDarkMode) {
    darkModeToggle.textContent = "☀️"; // Sun icon
    darkModeToggle.setAttribute("aria-pressed", "true");
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeToggle.textContent = "🌙"; // Moon icon
    darkModeToggle.setAttribute("aria-pressed", "false");
    localStorage.setItem("darkMode", "disabled");
  }
});
