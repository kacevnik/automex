   $(document).ready(function() {

        $(".slider_show").owlCarousel({
            nav:true,
            loop:true,
            margin: 30,
            items:1,
            dots: true,
            navText: ['<div class="slider_left"><i class="fas fa-arrow-alt-circle-left"></i></div>','<div class="slider_right"><i class="fas fa-arrow-alt-circle-right"></i></div>'],
        });

        $(".slider_qws").owlCarousel({
            loop:true,
            margin: 30,
            navText: ['<div class="slider_left"><i class="fas fa-arrow-alt-circle-left"></i></div>','<div class="slider_right"><i class="fas fa-arrow-alt-circle-right"></i></div>'],
            dots: true,
            items:1,
            nav: true
        });

    $("a[href*='#']").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
        return false;
    });


   });