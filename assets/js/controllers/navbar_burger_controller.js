import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class extends Controller {
  static targets = ["menu"];

  toggle() {
    this.menuTarget.classList.toggle("hidden");
  }
}
