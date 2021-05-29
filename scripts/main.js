import changeColorTop from "./change_top_color.js";
import hamburgerMenu from "./hamburguer.js";
import randomColors from "./random-colors.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".nav-button", ".nav-container", ".menu-desktop");
  randomColors(".rndm-color");
  changeColorTop();
});
