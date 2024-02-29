let menuIcon = document.querySelector(".header__icon--menu");
let menuResposive = document.querySelector(".header__menu")

menuIcon.addEventListener("click", () => {
  menuResposive.classList.toggle("hide");

})