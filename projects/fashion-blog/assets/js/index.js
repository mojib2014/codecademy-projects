// Selecting DOM elements
const themeLink = document.querySelector("#theme-link");
const themeButton = document.querySelector("#theme-btn");
const toggleImgs = document.querySelectorAll("img");
const mobileMenuBtn = document.querySelector("#mobile-menu");
const navbar = document.querySelector(".navbar");

// Determining/Toggling Theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}
// Theme button click event listener
themeButton.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  console.log("clicked");
  if (navbar.style.left === "-80%") {
    navbar.style.left = "0";
  } else navbar.style.left = "-80%";
});
