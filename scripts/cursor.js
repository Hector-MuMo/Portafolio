const d = document;

export default function followCursor() {
  const $circle = d.querySelector(".circle"),
    $innerCircle = d.querySelector(".inner-circle");

  d.addEventListener("mousemove", (e) => {
    if (
      e.target.matches("a") ||
      e.target.matches("img") ||
      e.target.matches("i") ||
      e.target.matches("input") ||
      e.target.matches("textarea") ||
      e.target.matches("button")
    ) {
      $circle.removeAttribute(
        "style",
        `top: ${e.pageY - 10}px; left: ${e.pageX - 15}px `
      );
    } else {
      $circle.setAttribute(
        "style",
        `top: ${e.pageY - 10}px; left: ${e.pageX - 15}px `
      );
    }
  });
}
