const root = document.documentElement;
const canvas = document.querySelector("#signal-canvas");
const context = canvas?.getContext("2d", { alpha: true, desynchronized: true });
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealTargets = document.querySelectorAll("[data-reveal]");
const pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  active: false,
};

let particles = [];
let width = 0;
let height = 0;
let pixelRatio = 1;
let animationFrame = 0;
let scrollProgress = 0;
let isScrollUpdateQueued = false;
let isResizeUpdateQueued = false;
let isAnimationRunning = false;

window.requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
  window.setTimeout(() => {
    document.body.classList.add("cue-faded");
  }, 3200);
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollProgress() {
  if (prefersReducedMotion.matches) {
    root.style.setProperty("--intro-progress", "0");
    scrollProgress = 0;
    return;
  }

  const progress = clamp(window.scrollY / (window.innerHeight * 0.78), 0, 1);

  if (Math.abs(progress - scrollProgress) < 0.002) {
    return;
  }

  scrollProgress = progress;
  root.style.setProperty("--intro-progress", progress.toFixed(4));
}

function requestScrollProgressUpdate() {
  if (isScrollUpdateQueued) {
    return;
  }

  isScrollUpdateQueued = true;
  window.requestAnimationFrame(() => {
    isScrollUpdateQueued = false;
    updateScrollProgress();
  });
}

function revealAllTargets() {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  revealAllTargets();
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}

function resizeCanvas() {
  if (!canvas || !context) {
    return;
  }

  pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const particleCount = Math.min(96, Math.max(46, Math.floor((width * height) / 17000)));
  particles = Array.from({ length: particleCount }, (_, index) => ({
    x: (index * 149.7) % width,
    y: (index * 91.9) % height,
    vx: (Math.random() - 0.5) * 0.26,
    vy: (Math.random() - 0.5) * 0.26,
    size: Math.random() * 1.7 + 0.55,
    phase: Math.random() * Math.PI * 2,
  }));

  updateScrollProgress();
}

function requestCanvasResize() {
  if (isResizeUpdateQueued) {
    return;
  }

  isResizeUpdateQueued = true;
  window.requestAnimationFrame(() => {
    isResizeUpdateQueued = false;
    resizeCanvas();
  });
}

function startAnimation() {
  if (isAnimationRunning || prefersReducedMotion.matches || !canvas || !context) {
    return;
  }

  isAnimationRunning = true;
  animationFrame = window.requestAnimationFrame(drawSignalField);
}

function stopAnimation() {
  isAnimationRunning = false;
  window.cancelAnimationFrame(animationFrame);
}

function drawSignalField(time = 0) {
  if (!canvas || !context || prefersReducedMotion.matches) {
    return;
  }

  context.clearRect(0, 0, width, height);

  const centerX = pointer.active ? pointer.x : width / 2 + Math.sin(time / 1400) * 34;
  const centerY = pointer.active ? pointer.y : height / 2 + Math.cos(time / 1700) * 24;
  const glowSize = Math.max(width, height) * (0.34 + scrollProgress * 0.18);
  const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowSize);
  glow.addColorStop(0, `rgba(157, 108, 255, ${0.13 + scrollProgress * 0.08})`);
  glow.addColorStop(0.45, "rgba(255, 101, 216, 0.05)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, width, height);

  const speed = 1 + scrollProgress * 1.8;
  const phaseSpeed = 0.013 + scrollProgress * 0.012;
  context.fillStyle = "rgba(200, 164, 255, 0.48)";

  particles.forEach((particle) => {
    particle.x += particle.vx * speed;
    particle.y += particle.vy * speed;
    particle.phase += phaseSpeed;

    if (particle.x < -24) particle.x = width + 24;
    if (particle.x > width + 24) particle.x = -24;
    if (particle.y < -24) particle.y = height + 24;
    if (particle.y > height + 24) particle.y = -24;

    const radius = particle.size + Math.sin(particle.phase) * 0.28 + scrollProgress * 0.6;
    context.beginPath();
    context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
    context.fill();
  });

  context.lineWidth = 1;
  const linkDistance = 118 + scrollProgress * 42;
  const linkDistanceSq = linkDistance * linkDistance;
  const lineAlphaScale = 0.16 + scrollProgress * 0.08;

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const first = particles[i];
      const second = particles[j];
      const dx = first.x - second.x;
      const dy = first.y - second.y;
      const distanceSq = dx * dx + dy * dy;

      if (distanceSq > linkDistanceSq) {
        continue;
      }

      const alpha = (1 - Math.sqrt(distanceSq) / linkDistance) * lineAlphaScale;
      context.beginPath();
      context.moveTo(first.x, first.y);
      context.lineTo(second.x, second.y);
      context.strokeStyle = `rgba(157, 108, 255, ${alpha})`;
      context.stroke();
    }
  }

  const reach = 230 + scrollProgress * 90;
  const reachSq = reach * reach;

  particles.forEach((particle) => {
    const dx = particle.x - centerX;
    const dy = particle.y - centerY;
    const distanceSq = dx * dx + dy * dy;

    if (distanceSq > reachSq) {
      return;
    }

    const distance = Math.sqrt(distanceSq);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(particle.x, particle.y);
    context.strokeStyle = `rgba(255, 101, 216, ${(1 - distance / reach) * 0.2})`;
    context.stroke();
  });

  if (isAnimationRunning) {
    animationFrame = window.requestAnimationFrame(drawSignalField);
  }
}

if (canvas && context && !prefersReducedMotion.matches) {
  resizeCanvas();
  updateScrollProgress();
  startAnimation();

  window.addEventListener("resize", requestCanvasResize);
  window.addEventListener("scroll", requestScrollProgressUpdate, { passive: true });
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      updateScrollProgress();
      startAnimation();
    }
  });
} else {
  updateScrollProgress();
}

prefersReducedMotion.addEventListener("change", () => {
  stopAnimation();
  revealAllTargets();
  updateScrollProgress();

  if (!prefersReducedMotion.matches) {
    resizeCanvas();
    startAnimation();
  }
});
