import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class extends Controller {
  static targets = ["icon"];

  connect() {
    this.loadTheme();
  }

  toggle() {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    this.updateIcons(isDark);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    this.updateIcons(isDark);
  }

  updateIcons(isDark) {
    this.iconTargets.forEach((icon) => {
      icon.innerHTML = isDark ? this.sunIcon() : this.moonIcon();
    });
  }

  moonIcon() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9 9 0 1112 3a7.5 7.5 0 009.752 12.002z" />
    </svg>
  `;
  }

  sunIcon() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.189l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.811l1.591-1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  `;
  }
}
