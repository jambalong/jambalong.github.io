import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["navLinks"];

  connect() {
    this.menuOpen = false;
  }

  toggle() {
    if (this.menuOpen) {
      this.navLinksTarget.style.display = "none";
      this.menuOpen = false;
    } else {
      this.navLinksTarget.style.display = "block";
      this.menuOpen = true;
    }
  }
}

