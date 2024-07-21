(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top scrolled');
        } else {
            $('.navbar').removeClass('sticky-top scrolled');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Highlight active link based on scroll position
        function updateActiveLink() {
            let scrollPos = $(document).scrollTop() + 100; // Adjusted offset for navbar height
            $('.navbar-nav .nav-link').each(function () {
                let currLink = $(this);
                let refElement = $(currLink.attr("href").split('#')[1]);

                if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav .nav-link').removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            });
        }

        $(window).on("scroll", updateActiveLink);

        // Collapse navbar on link click (for small screens)
        $('.navbar-nav .nav-link').on('click', function () {
            if ($('.navbar-toggler').is(':visible')) {
                $('.navbar-collapse').collapse('hide');
            }
        });

        // Smooth scroll and navigation
        $('.navbar-nav .nav-link').on('click', function (event) {
            let targetHref = $(this).attr('href');
            let targetID = targetHref.split('#')[1]; // Get the fragment identifier
            let targetPage = targetHref.split('#')[0]; // Get the page path

            if (window.location.pathname.endsWith(targetPage) || targetPage === '') {
                // Same page scroll
                event.preventDefault(); // Prevent the default anchor behavior
                let targetPosition = $('#' + targetID).offset().top; // Get the position of the target element

                $('html, body').animate({
                    scrollTop: targetPosition
                }, 100); // Smooth scroll to the target element
            } else {
                // Navigate to different page
                window.location.href = targetHref;
            }
        });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

})(jQuery);
