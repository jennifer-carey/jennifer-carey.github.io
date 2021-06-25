const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hamburger.classList.toggle("open");
});

