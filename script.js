document.documentElement.classList.add("js");

const root = document.documentElement;
const nav = document.querySelector(".nav-shell");
const revealTargets = document.querySelectorAll("[data-reveal]");
const tiltTargets = document.querySelectorAll("[data-tilt]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let pointerFrame = 0;
let scrollFrame = 0;

window.requestAnimationFrame(() => document.body.classList.add("is-ready"));

function revealAll() {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

function updatePointer(event) {
  if (reducedMotion.matches || pointerFrame) return;

  pointerFrame = window.requestAnimationFrame(() => {
    root.style.setProperty("--mouse-x", `${event.clientX}px`);
    root.style.setProperty("--mouse-y", `${event.clientY}px`);
    pointerFrame = 0;
  });
}

function updateNav() {
  if (scrollFrame) return;

  scrollFrame = window.requestAnimationFrame(() => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 48);
    scrollFrame = 0;
  });
}

window.addEventListener("pointermove", updatePointer, { passive: true });
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

tiltTargets.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || event.pointerType === "touch") return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--card-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--card-y", `${(y * 100).toFixed(1)}%`);
    card.style.setProperty("--tilt-x", `${((0.5 - y) * 2.4).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${((x - 0.5) * 2.4).toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});

reducedMotion.addEventListener("change", () => {
  revealAll();
  tiltTargets.forEach((card) => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});
