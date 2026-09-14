const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle-label");
const savedTheme = localStorage.getItem("portfolio-theme");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle?.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  if (themeToggleLabel) {
    themeToggleLabel.textContent = isDark ? "Light theme" : "Dark theme";
  }
};

setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

const revealTargets = document.querySelectorAll(".project-card, .about-copy, .about-details, .contact-side");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  revealObserver.observe(target);
});
