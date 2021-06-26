const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav-link");

function closeNav() {
  navigation.classList.remove("show");
  hamburger.classList.remove("open");
}

function toggleMenu() {
  navigation.classList.toggle("show");
  hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
navLinks.forEach(link => link.addEventListener("click", closeNav));



