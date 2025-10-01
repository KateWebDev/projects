"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const heightHeader = header.offsetHeight;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > heightHeader) {
      if (header) {
        header.classList.add("header--fixed");
      }
    } else {
      if (header) {
        header.classList.remove("header--fixed");
      }
    }
  });
});
