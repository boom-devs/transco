(function ($) {
    "use strict";
    $(document).ready(function () {
        /*
       Preeloader
       ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
        });

        /*
       Jquery Mobile Menu
       ============================*/
        $("#main-menu").meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".mobile-nav-menu",
        });

        /*
        Stikey Js
        ============================*/
        var nav = $(".header-sec.sticky-header");
        var scrolled = false;
        $(window).scroll(function () {
            if (100 < $(window).scrollTop() && !scrolled) {
                nav
                    .addClass("sticky_menu animated fadeIn")
                    .animate({"margin-top": "0px"});
                scrolled = true;
            }
            if (100 > $(window).scrollTop() && scrolled) {
                nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                scrolled = false;
            }
        });

        /*
        Jquery Accordion
        ============================*/
        $(function() {
            $('.accordion-item').click(function(){
                $(this).toggleClass(' open ');
                $(this).siblings().removeClass(' open ');
                $('.accordion-body').stop().slideUp();
                $('.open .accordion-body').stop().slideDown();
                return false;
            });
        });

        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Testimonial Slider
       ============================*/
        $(".testimonial-slider-wrapper").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });
        /*
       scrollUp
       ============================*/
        $.scrollUp({
            scrollText: '<i class="flaticon-scroll"></i>',
            easingType: "linear",
            scrollSpeed: 900,
            animation: "fade",
        });
        /*
        ounter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    });
})(jQuery);
