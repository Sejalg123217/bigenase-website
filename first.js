// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("dark-mode-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Smooth scroll
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for contacting us!");
  e.target.reset();
});
