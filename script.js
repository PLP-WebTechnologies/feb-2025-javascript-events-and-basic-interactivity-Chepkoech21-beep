// Button click & color toggle
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = magicBtn.textContent === "Clicked!" ? "Click me!" : "Clicked!";
  magicBtn.style.backgroundColor = magicBtn.style.backgroundColor === "yellow" ? "" : "yellow";
});

// Hover effect on button - using JS event handling
magicBtn.addEventListener("mouseenter", () => {
  magicBtn.style.transform = "scale(1.1)";
});
magicBtn.addEventListener("mouseleave", () => {
  magicBtn.style.transform = "scale(1)";
});

// Keypress detection on whole page
window.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Bonus: double click secret action
magicBtn.addEventListener("dblclick", () => {
  alert("Secret double-click action triggered!");
});

// Image gallery - click to activate image
const images = document.querySelectorAll("#gallery img");
images.forEach(img => {
  img.addEventListener("click", () => {
    images.forEach(i => i.classList.remove("active"));
    img.classList.add("active");
  });
});

// Tabs functionality
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Form Validation
const form = document.getElementById("signupForm");
const errorsDiv = document.getElementById("formErrors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorsDiv.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  let errors = [];

  if (!name) errors.push("Name is required.");
  if (!email) {
    errors.push("Email is required.");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.push("Email format is invalid.");
  }
  if (password.length < 8) errors.push("Password must be at least 8 characters.");

  if (errors.length > 0) {
    errorsDiv.innerHTML = errors.join("<br>");
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
});
