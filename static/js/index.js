/*
        =========================================
        Script written for ECE UNN WEBSITE
        ===================================
         */

//get open and close toggleBtns
const toggleBtn = document.getElementById("toggle-btn"),
  closeToggleBtn = document.querySelector(".close-toggle-btn"),
  navbarContainer = document.querySelector(".navbar-container"),
  scrollTop = document.querySelector(".scroll-top");

//open navabr container when the button is toggle
toggleBtn.addEventListener("click", (e) => {
  if (navbarContainer.classList.contains("close-toggle-menu")) {
    navbarContainer.classList.remove("close-toggle-menu");
  }
  navbarContainer.classList.add("show-toggle-menu");
});

//remove the navbar menu on scroll
window.onscroll = () => {
  if (window.scrollY > 600) {
    navbarContainer.classList.add("close-toggle-menu");
  }
  if (window.scrollY > 500) {
    scrollTop.style.display = "initial";
  } else {
    scrollTop.style.display = "none";
  }
};

// close the toggle menu
closeToggleBtn.addEventListener("click", () => {
  navbarContainer.classList.add("close-toggle-menu");
});
