$(document).ready(function() {

        // -------------header-area-sticky-------------
    $('.header-area').sticky({
        topSpacing: 0
    });

    // -------------slicknav------------

        $('#main-menu').slicknav({
            label: '',
            prependTo: '.header-area .container',
            closeOnClick: true,
        });

    // -------------preloader------------
        jQuery(window).load(function() {
            $(".loader").fadeOut(2500);
        });

    // -------------owl-carousel-------------
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        autoplaySpeed: 3000,
        smartSpeed: 2000,
        Speed: 500,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
                dots: true,
            }
        }
    });



});