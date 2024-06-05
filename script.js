const toggleButton = document.querySelector("#menuopen");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("ri-close-large-line");
});

