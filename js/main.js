   $(document).ready(function() {

        $(".slider_show").owlCarousel({
            nav:true,
            loop:true,
            margin: 30,
            items:1,
            dots: true,
            navText: ['<div class="slider_left"><i class="fas fa-arrow-alt-circle-left"></i></div>','<div class="slider_right"><i class="fas fa-arrow-alt-circle-right"></i></div>'],
        });

        $(".partners_slider").owlCarousel({
            loop:true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:1,
                },
                767:{
                    items:3,
                },
                992:{
                    items:5,
                    nav:true
                }
            },
            navText: ['<div class="partners_slider_left"></div>','<div class="partners_slider_right"></div>'],
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false
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