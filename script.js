document.documentElement.classList.add("js");

const root = document.documentElement;
const header = document.querySelector(".site-header");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = themeToggle?.querySelector("span");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const revealTargets = document.querySelectorAll("[data-reveal]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

function readTheme() {
  try {
    return localStorage.getItem("lean-theme");
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("lean-theme", theme);
  } catch {
    // The theme still works when storage is unavailable.
  }
}

function applyTheme(theme) {
  const isLight = theme === "light";
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeToggle?.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
  if (themeLabel) themeLabel.textContent = isLight ? "Dark" : "Light";
  themeMeta?.setAttribute("content", isLight ? "#f5f4f0" : "#0a0a0a");
}

const savedTheme = readTheme();
applyTheme(savedTheme || (systemTheme.matches ? "light" : "dark"));

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  storeTheme(nextTheme);
});

systemTheme.addEventListener("change", (event) => {
  if (!readTheme()) applyTheme(event.matches ? "light" : "dark");
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
