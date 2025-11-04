new WOW().init();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spacebetween: 100,

  // If we need pagination
  pagination: {
    el: '.projects-pagination',
    type: 'bullets',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true,
  },

});