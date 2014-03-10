/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();
});

$(document).on('ready', function(){
    $('.image-preview').fancybox();
});

$(document).on('ready', function(){
    $(function() {

        $('.carousel_feedback .carousel__viewport').jcarousel({
            wrap: 'circular'
        });

        $('.carousel_feedback .carousel__arrow_prev').jcarouselControl({
            target: '-=1'
        });

        $('.carousel_feedback .carousel__arrow_next').jcarouselControl({
            target: '+=1'
        });

    });
});

$(document).on('ready', function(){
    $(function() {

        $('.carousel_project .carousel__viewport').jcarousel({
            wrap: 'circular'
        });

        $('.carousel_project .carousel__arrow_prev').jcarouselControl({
            target: '-=1'
        });

        $('.carousel_project .carousel__arrow_next').jcarouselControl({
            target: '+=1'
        });

    });
});