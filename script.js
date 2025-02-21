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

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  fetch(form.action, {
    method:form.method,
    body: formData,
    headers:{
      'Accept':'application/json'
    }
  }).then(response => {
    if(response.ok){
      document.getElementById("success-message").style.display = "block";
      form.reset();
    }else{
      alert("Failed to send message. Please try again later.");
    }
  })

  

});