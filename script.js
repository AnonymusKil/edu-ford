// const toggle = document.querySelector(".toggle");
// const nav = document.querySelector("nav");
// let open = false;

// toggle.addEventListener("click", () => {
//   open = !open;
//   if (open) {
//     toggle.classList.add("open");
//     nav.classList.add("open");
//   } else {
//     toggle.classList.remove("open");
//     nav.classList.remove("open");
//   }
// });
// Get elements
const toggle = document.querySelector(".toggle");
const menu = document.querySelector("ul");

// Add event listener for menu toggle
toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
});

// Optional: Close menu if user clicks outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("open");
    toggle.classList.remove("open");
  }
});
