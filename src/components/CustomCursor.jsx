import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const segments = document.querySelectorAll(".cursor-segment");
    let mouseX = 0;
    let mouseY = 0;

    const positions = Array.from(segments).map(() => ({
      x: mouseX,
      y: mouseY,
    }));

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      positions.forEach((pos, index) => {
        pos.x += (x - pos.x) * 0.35;
        pos.y += (y - pos.y) * 0.35;

        segments[index].style.transform = `translate(${pos.x}px, ${pos.y}px)`;

        x = pos.x;
        y = pos.y;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    // Hover interaction
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("cursor-hover")
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("cursor-hover")
      );
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="cursor-segment"
          style={{ "--i": i }}
        />
      ))}
    </>
  );
}

export default CustomCursor;
