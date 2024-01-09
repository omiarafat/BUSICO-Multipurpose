


var swiper = new Swiper(".BanarSlide", {
    slidesPerView: 1,
    spaceBetween: -.3,
    loop: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });