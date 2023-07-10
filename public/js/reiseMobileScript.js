

$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    touchThreshold: 5,
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