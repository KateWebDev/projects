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
    $(".tabs__list").slick("reinit");
  });
}

$(".tabs__list").slick({
  dots: false,
  arrows: true,
  adaptiveHeight: true,
  fade: true,
  prevArrow:
    '<button type="button" class="slick-btn slick-btn--prev"><svg width="41" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM41 3.5H1v1h40v-1z"/></svg></button>',
  nextArrow:
    '<button type="button" class="slick-btn slick-btn--next"><svg width="41" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.354 4.354a.5.5 0 000-.708L37.172.464a.5.5 0 10-.707.708L39.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h40v-1H0v1z"/></svg></button>',
});

$(".clients__items").slick({
  dots: false,
  arrows: true,
  fade: true,
  prevArrow:
    '<button type="button" class="slick-btn slick-btn--prev"><svg width="41" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM41 3.5H1v1h40v-1z"/></svg></button>',
  nextArrow:
    '<button type="button" class="slick-btn slick-btn--next"><svg width="41" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.354 4.354a.5.5 0 000-.708L37.172.464a.5.5 0 10-.707.708L39.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h40v-1H0v1z"/></svg></button>',
});
