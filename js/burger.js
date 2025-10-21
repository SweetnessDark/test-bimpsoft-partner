const burger = document.getElementById("burger");
const nav = document.querySelector(".main-nav");
const dropdowns = document.querySelectorAll(".dropdown-container > a");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

dropdowns.forEach((drop) => {
  drop.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("active");
    }
  });
});
