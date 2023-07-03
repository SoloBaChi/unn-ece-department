// Theme code sniippet

const toggleThemeButtons = document.querySelectorAll(
  ".light-theme-icon .light-icon"
);
const currentTheme = localStorage.getItem("theme");

//check if the currentTheme is white
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
}

// add a click event to the toggleThemeBtn
for (let toggleThemeBtn of toggleThemeButtons) {
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    let theme = "dark";
    //if the body contains light theme, set theme to light
    if (document.body.classList.contains("light-theme")) {
      theme = "light";
    }
    //set theme to dark || return theme in dark mode
    localStorage.setItem("theme", theme);
  });
}
