'use strict';
(function () {
  let scrollBtn = document.querySelector(".intro__scroll-btn");
  let header = document.querySelector(".header");
  let linkBlock = document.querySelector(".link-container");
  let menuButton = document.querySelector(".header__menu-button");

  menuButton.onclick = function() {
    header.classList.toggle('show');
    document.body.classList.toggle('overflow');
  }

  scrollBtn.onclick = function() {
    linkBlock.scrollIntoView({behavior: "smooth"});
  }

})();
