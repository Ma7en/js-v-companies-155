$("document").ready(function () {

    $('.count').countUp({
        delay: 10,
        time: 2500
    });
        $('.owl-carousel').owlCarousel({
            rtl:true,
            loop:true,
            margin:30,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });


})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();