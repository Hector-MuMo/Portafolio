const d = document;

export default function followCursor() {
  const $circle = d.querySelector(".circle"),
    $imgTitle = d.querySelector(".portfolio-img-title");

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

  d.addEventListener("mouseover", (e) => {
    if (e.target.matches(".portfolio-img-container img")) {
      $imgTitle.style.display = "inline-block";
      $imgTitle.innerHTML = e.target.alt;
      e.target.addEventListener("mousemove", (e) => {
        $imgTitle.setAttribute(
          "style",
          `top: ${e.pageY + 20}px; left: ${e.pageX + 10}px `
        );
      });
    } else {
      $imgTitle.style.display = "none";
    }
  });
}
