const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");
let open = false;

toggle.addEventListener("click", () => {
  open = !open;
  if (open) {
    toggle.classList.add("open");
    nav.classList.add("open");
  } else {
    toggle.classList.remove("open");
    nav.classList.remove("open");
  }
});
