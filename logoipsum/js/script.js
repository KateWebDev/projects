const header = document.querySelector(".header");
let heightHeader = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.pageYOffset > heightHeader) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".header__burger")) {
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
  } else {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("header__burger--avtive");
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".menu").classList.remove("menu--active");
    document.querySelector("body").classList.remove("lock");
    // document.querySelector(".close").classList.remove("close--active");
    document.querySelector(".header__burger").classList.remove("header__burger--active");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target.closest(".menu__link")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    evt.target.classList.add("menu__link--active");
  }
  if (evt.target.closest(".up") || evt.target.closest(".logo__img")) {
    let links = document.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("menu__link--active");
    });
    document.querySelectorAll(".menu__link")[0].classList.add("menu__link--active");
  }
});

let tabs = document.querySelectorAll(".tabs__item");
let tabsContents = document.querySelectorAll(".tabs__block");

for (let i = 0; i < tabs.length; i++) {
  //
  tabs[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    tabs.forEach((tab) => {
      tab.classList.remove("tabs__item--active");
    });
    tabs[i].classList.add("tabs__item--active");

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("tabs__block--active");
    });
    tabsContents[i].classList.add("tabs__block--active");
  });
}
