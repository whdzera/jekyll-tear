// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
  
  function toggleDarkMode() {
    // Check if dark mode should be enabled
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      console.log("Dark mode activated");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light mode activated");
    }
  }
  
  // Check for saved theme
  toggleDarkMode();
  
  // Toggle theme function
  function switchTheme() {
    console.log("Switch theme clicked");
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      console.log("Switched to light mode");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      console.log("Switched to dark mode");
    }
  }
  
  // Add event listeners if elements exist
  if (darkModeToggle) {
    console.log("Dark mode toggle button found");
    darkModeToggle.addEventListener("click", switchTheme);
  } else {
    console.log("Dark mode toggle button not found");
  }
  
  if (darkModeToggleMobile) {
    console.log("Mobile dark mode toggle button found");
    darkModeToggleMobile.addEventListener("click", switchTheme);
  } else {
    console.log("Mobile dark mode toggle button not found");
  }
});