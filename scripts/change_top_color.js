const d = document;

export default function changeColorTop() {
  const $background = d.querySelector(".inner-nav"),
    $color = d.querySelectorAll(".inner-nav a");
  let lastPositionY = 0;

  d.addEventListener("scroll", (e) => {
    lastPositionY = window.scrollY;

    if (lastPositionY >= 900) {
      $background.style.background = "#fff";
      $color.forEach((a) => {
        a.style.color = "#000";
      });
    } else {
      $background.style.background = "transparent";
      $color.forEach((a) => {
        a.style.color = "#fff";
      });
    }

    if (window.innerWidth < 1024) {
      $background.style.background = "#fff";
      $color.forEach((a) => {
        a.style.color = "#000";
      });
    }
  });
}
