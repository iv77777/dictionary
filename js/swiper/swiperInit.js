const swiper = new Swiper('.swiper', {
  // slidesPerView: 1,
  // spaceBetween: 30,

  // зацикльть покругу
  // loop: true,

  // Включає клавіатуру для управління
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
