import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class extends Controller {
  static targets = ["image"]

  connect() {
    this.imageTarget.addEventListener("mouseenter", () => {
      this.imageTarget.classList.add("scale-165", "brightness-30")
    })
    this.imageTarget.addEventListener("mouseleave", () => {
      this.imageTarget.classList.remove("scale-165", "brightness-30")
    })
  }
}
