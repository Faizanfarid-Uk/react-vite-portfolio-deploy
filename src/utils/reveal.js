export function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          // stagger children
          const children = entry.target.querySelectorAll(".stagger");
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.15}s`;
            child.classList.add("active");
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => observer.observe(el));
}
