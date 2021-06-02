const d = document;

export default function followCursor() {
  const $circle = d.querySelector(".circle"),
    $innerCircle = d.querySelector(".inner-circle");

  d.addEventListener("mousemove", (e) => {
    $circle.setAttribute(
      "style",
      `top: ${e.pageY - 10}px; left: ${e.pageX - 15}px `
    );
  });
}
