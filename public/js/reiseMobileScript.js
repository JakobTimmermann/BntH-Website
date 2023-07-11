

$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.5, 0.7, 0.4, 0.7)',
    // cssEase: 'cubic-bezier(0.55, 0.24, 0.18, 1)',
    // cssEase: 'ease-in-out',
    touchThreshold: 100,
    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }]
  });
}

carousel();