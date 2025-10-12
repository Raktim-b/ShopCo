const swiper = new Swiper(".new-swipper", {
  loop: true,
  slidesPerView: 1,
  //   spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 576px
    768: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
  },
});
const topSwiper = new Swiper(".top-swipper", {
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".top-pegination",
  },
  navigation: {
    nextEl: ".top-swiper-button-prev",
    prevEl: ".top-swiper-button-next",
  },
  breakpoints: {
    // when window width is >= 576px
    768: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
  },
});
var customswiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 576px
    768: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
  },
});
