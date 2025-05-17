var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
