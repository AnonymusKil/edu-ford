const toggle = document.querySelector(".toggle");
const menu = document.querySelector("ul");
const icon = toggle.querySelector("i");

// Toggle Menu on Click
toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  toggle.classList.toggle("open");

  // Change icon between menu and close
  if (menu.classList.contains("open")) {
    icon.classList.replace("ri-menu-line", "ri-close-line"); // Close icon
  } else {
    icon.classList.replace("ri-close-line", "ri-menu-line"); // Hamburger icon
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    icon.classList.replace("ri-close-line", "ri-menu-line"); // Reset to menu icon
  }
});
