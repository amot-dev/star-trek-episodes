$(document).ready(function(){
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
                var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true)
            }
            else {
                //I've waited too long to comment and I seem to have forgotten what this does. Oh well.
                var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true) - $('#season-nav').outerHeight(true)
            }

            $('html, body').animate({
                scrollTop: amount_to_scroll
            }, 500);
        }
    });

    setTitleHeight();
    $(window).resize(function() {
        setTitleHeight();
    })
    function setTitleHeight() {
        $('h3').each(function() {
            if ($(this).outerHeight(true) > $(this).next().outerHeight(true)) {
                if ($(this).outerHeight(true) > ($(this).next().outerHeight(true) * 2)) {
                    $(this).parent().addClass('longTitle2');
                }
                else {
                    $(this).parent().addClass('longTitle');
                }
            }
            else {
                $(this).parent().removeClass('longTitle');
            }
        });
    };

    $('.tag-list').children().click(function(){
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            /*
            var removingId = $(this).attr('id');
            $('.'+removingId).show();
            */
        }
        else {
            $(this).addClass('selected');
            /*
            var addingId = $(this).attr('id');
            $('.'+addingId).hide();
            */
        }
    });

    $('#search').hideseek({
        hidden_mode: true,
        ignore: '.selected'
    });
});