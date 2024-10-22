$("document").ready(function () {
    $(".btn_scroll").click(function() {
        window.scrollTo({ top: 500, behavior: 'smooth'});
      });

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
$(".loading").ready(
    function () {
        setTimeout(function () {
            $(".loading").fadeOut();

        }, 1000);
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