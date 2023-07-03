// toggle menu function
// Carousel script
$(document).ready(function () {
  $("#sliding-banner-images").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      960: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1800: {
        items: 4,
      },
    },
  });
});
