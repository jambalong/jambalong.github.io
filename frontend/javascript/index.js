import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
  }
  else if (menuOpen == true) {
    navLinks.style.display = "none";
    menuOpen = false;
  }
});
