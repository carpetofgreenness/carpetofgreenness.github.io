$(window).scroll(function () {
    $('.animation-enterance').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).height() + topOfWindow;
        var twentyPercent = $(window).height() * .2;


        if ( bottomOfWindow - twentyPercent > imagePos + imageHeight && topOfWindow + twentyPercent < imagePos + imageHeight) {
            // $(this).addClass("fadeIn");
            // $(this).removeClass("fadeOut");
            $(this).css({'opacity': 1 })
        } else if ( bottomOfWindow > imagePos && bottomOfWindow - twentyPercent < imagePos ) {
            // $(this).removeClass("fadeIn");
            // $(this).addClass("fadeOut");
            var opac = Math.sin( ( bottomOfWindow - imagePos ) / twentyPercent )
            $(this).css({'opacity':opac})
        } else if ( topOfWindow < imagePos && topOfWindow + twentyPercent > imagePos) {
            var opac = Math.sin( (imagePos - topOfWindow) / twentyPercent )
            $(this).css({'opacity':opac});
        }
    });
});

$(document).ready(function() {
        $('.animation-enterance').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).height() + topOfWindow;
        var twentyPercent = $(window).height() * .2;


        if ( bottomOfWindow - twentyPercent > imagePos + imageHeight && topOfWindow + twentyPercent < imagePos + imageHeight) {
            // $(this).addClass("fadeIn");
            // $(this).removeClass("fadeOut");
            $(this).css({'opacity': 1 })
        } else if ( bottomOfWindow > imagePos && bottomOfWindow - twentyPercent < imagePos ) {
            // $(this).removeClass("fadeIn");
            // $(this).addClass("fadeOut");
            var opac = Math.sin( ( bottomOfWindow - imagePos ) / twentyPercent )
            $(this).css({'opacity':opac})
        } else if ( topOfWindow < imagePos && topOfWindow + twentyPercent > imagePos) {
            var opac = Math.sin( (imagePos - topOfWindow) / twentyPercent )
            $(this).css({'opacity':opac});
        }
    });
})