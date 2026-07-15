document.documentElement.classList.add("js");

const revealTargets = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function revealAll() {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}

prefersReducedMotion.addEventListener("change", revealAll);
