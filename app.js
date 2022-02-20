// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const div = document.querySelector("nav div");
const nav = document.querySelector("nav");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  div.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    div.classList.remove("show");
  })
);
