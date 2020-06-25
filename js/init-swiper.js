'use strict';
(function () {
  var swiper;
  var swiperElement = document.querySelector('.swiper-container');

  if (!swiperElement) {
    return;
  }


  if (window.matchMedia('(max-width: 767px)').matches) {
    new window.Swiper('.programm__container', {
      slidesPerView: 1,
      loop: true,
    });
  }

  var createSlider = function () {
    swiper = new window.Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
    });
  };

  var initSliderMobile = function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (!swiper || swiper.destroyed) {
        createSlider();
      }
    } else if (swiper) {
      swiper.destroy(true, true);
    }
  };

  if (swiperElement.classList.contains('js-slider-mobile')) {
    initSliderMobile();
    window.addEventListener('resize', initSliderMobile);
  } else {
    createSlider();
  }
})();
