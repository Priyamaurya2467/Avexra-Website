"use client";

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target); // run only once
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document
    .querySelectorAll<HTMLElement>(".reveal")
    .forEach(el => observer.observe(el));
}
