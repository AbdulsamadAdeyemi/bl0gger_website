const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    const $nav = $('.nav');
    const $toggleCollapse = $('.toggle-collapse');

    // Native button interaction supports mouse, touch, Enter and Space.
    $toggleCollapse.on('click', function () {
        const isExpanded = $nav.toggleClass('collapse').hasClass('collapse');
        $(this).attr('aria-expanded', String(isExpanded));
        $(this).attr('aria-label', isExpanded ? 'Close navigation' : 'Open navigation');
    });

    // owl-crouselblog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

//aos 

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


    AOS.init();

});