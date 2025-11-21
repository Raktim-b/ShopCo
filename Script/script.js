document.addEventListener("DOMContentLoaded", () => {
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });
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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
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
      nextEl: ".top-swiper-button-next",
      prevEl: ".top-swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
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
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
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
  function countUp(el) {
    let target = +el.getAttribute("data-target");
    let count = 0;

    let speed = target / 200; // lower = slower

    let update = () => {
      count += speed;
      if (count < target) {
        el.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        el.innerText = target + "+";
      }
    };
    update();
  }

  document.querySelectorAll(".stat-number").forEach((num) => {
    num.setAttribute(
      "data-target",
      num.innerText.replace("+", "").replace(",", "")
    );
    countUp(num);
  });
});
