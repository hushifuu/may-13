const lyricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".lyric-line").forEach((line, index) => {
        window.setTimeout(() => line.classList.add("show"), index * 240);
      });
    });
  },
  { threshold: 0.4 },
);

lyricObserver.observe(document.querySelector("#song"));

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener(
  "pointerdown",
  (event) => {
    const mark = document.createElement("span");
    mark.className = "may-pop";
    mark.textContent = "13";
    mark.style.setProperty("--x", `${event.clientX}px`);
    mark.style.setProperty("--y", `${event.clientY}px`);
    document.body.append(mark);
    window.setTimeout(() => mark.remove(), 850);
  },
  { passive: true },
);
