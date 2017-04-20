//this js makes anything with the class "animation-enterence" gradually fade on scroll
//in the top and bottom 20% of the screen

$(window).scroll(function () {
    $('.animation-enterance').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).height() + topOfWindow;
        var twentyPercent = $(window).height() * .2;

        //check if the item is in the middle 60%
        if ( bottomOfWindow - twentyPercent > imagePos + imageHeight && topOfWindow + twentyPercent < imagePos + imageHeight) {
            //not faded
            $(this).css({'opacity': 1 })
        } else if ( bottomOfWindow > imagePos && bottomOfWindow - twentyPercent < imagePos ) {
            //this is the bottom 20%
            //on a scale of 0-1, find out where item is relative to bottom of window
            //this will determine opacity
            //if it is closer to the bottom, it will have opacity closer to 0
            //the sin function makes it look more natural
            var opac = Math.sin( ( bottomOfWindow - imagePos ) / twentyPercent )
            $(this).css({'opacity':opac})
        } else if ( topOfWindow < imagePos && topOfWindow + twentyPercent > imagePos) {
            //same logic as above, except with the top 20%
            //if it is closer to the top, opacity is closer to 0
            var opac = Math.sin( (imagePos - topOfWindow) / twentyPercent )
            $(this).css({'opacity':opac});
        }
    });
});

//load the page with opacity already showing
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