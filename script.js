// Theme management & micro-interactions
(function () {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getActiveTheme() {
    try {
      const stored = localStorage.getItem("lean-theme");
      if (stored) return stored;
    } catch (e) {
      // localStorage may be disabled
    }
    return systemPrefersDark.matches ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    const isLight = theme === "light";
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} mode`);
      themeToggle.setAttribute("title", `Switch to ${isLight ? "dark" : "light"} mode`);
    }
    if (themeMeta) {
      themeMeta.setAttribute("content", isLight ? "#fafaf9" : "#09090b");
    }
    try {
      localStorage.setItem("lean-theme", theme);
    } catch (e) {}
  }

  // Set initial theme
  setTheme(getActiveTheme());

  // Toggle on click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  // Sync with OS preferences if user hasn't explicitly set a preference
  systemPrefersDark.addEventListener("change", (e) => {
    try {
      if (!localStorage.getItem("lean-theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    } catch (err) {}
  });

  // Header scroll detection
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
