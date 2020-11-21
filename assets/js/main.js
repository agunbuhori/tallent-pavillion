$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.i-link').each(function (index, item) {
        $(item).prepend('<div class="i-link__bg"></div>')
        var bgimage = $(item).find('img').attr('src');
        var bg = $(item).find('.i-link__bg').eq(0);
        $(bg).css('background-image', 'url('+bgimage+')');
    })

    $('.i-link').hover(function() {
        var replacer = $(this).find('.i-link__title-hover');

        if (replacer.length) {
            $(this).find('.i-link__title-hover').toggle();
            $(this).find('.i-link__title').toggle();
        }
    });

});