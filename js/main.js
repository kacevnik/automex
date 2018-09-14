   $(document).ready(function() {

        $(".home_otziv_slider_wrap").owlCarousel({
            loop:true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                500:{
                    items:1,
                    nav:false
                },
                767:{
                    items:2,
                    nav:false
                },
                992:{
                    items:2,
                    nav:false
                }
            },
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true
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