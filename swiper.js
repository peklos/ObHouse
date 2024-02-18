var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
  },
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
});