
//Фиксированная шапка

const header = document.querySelector('.header');
const intro = document.querySelector('.info');

let heightHeader = header.offsetHeight;


document.addEventListener('scroll', () => {
    if (window.pageYOffset > heightHeader) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }
})

//Бургер
document.addEventListener('click', (evt) => {
    if (evt.target.closest('.header__burger')) {
        document.querySelector('.menu__items').classList.toggle('menu__items--active');
    } else {
        document.querySelector('.menu__items').classList.remove('menu__items--active');
    }
})

$('.secrets__items').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="button button--prev"><img src="images/main/secrets/arrowLeft.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="button button--next"><img src="images/main/secrets/arrowRight.svg" alt="стрелка вправо"></button>',
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})


$('[data-fancybox="gallery"]').fancybox({
});









