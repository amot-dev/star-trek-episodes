$(document).ready(function(){

    //SEASON NAV CODE
    if ($('#season-nav').length) {

        //save the original top offset of the season nav
        var season_nav_offset = $('#season-nav').offset().top;
        $(window).scroll(function(){
            if ($(window).scrollTop() >= season_nav_offset) {
                $('#season-nav').addClass('sticky');
            }
            else {
                $('#season-nav').removeClass('sticky');
            }
        });

        $(document).on('click', 'a', function(event){
            //make sure to only affect season nav links
            if ($(this).parent().parent().is('#season-nav')) {
                event.preventDefault();

                if ($('#season-nav').hasClass('sticky')) {
                    //scroll down to element while taking in account the height of season nav
                    var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true) + 1;
                }
                else {
                    //I've waited too long to comment and I seem to have forgotten what this does. Oh well.
                    var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true) - $('#season-nav').outerHeight(true) + 1;
                }

                $('html, body').animate({
                    scrollTop: amount_to_scroll
                }, 500);
            }
        });
    };

    //TITLE PADDING CODE
    $(window).on("resize", function () {

        $('h3').each(function() {
            //set padding at top of episode to height of title + $standard-margin
            $(this).parent().css('padding-top', ($(this).outerHeight(true) + 4));
        });

    }).resize();

});
