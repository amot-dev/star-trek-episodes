$(document).ready(function(){
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
        if ($(this).parent().parent().is('#season-nav')) {
            event.preventDefault();

            if ($('#season-nav').hasClass('sticky')) {
                var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true)
            }
            else {
                var amount_to_scroll = $( $.attr(this, 'href') ).offset().top - $('#season-nav').outerHeight(true) - $('#season-nav').outerHeight(true)
            }

            $('html, body').animate({
                scrollTop: amount_to_scroll
            }, 500);
        }
    });

    $('.tag-list').children().click(function(){
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            var removingId = $(this).attr('id');
            $('.'+removingId).show();
        }
        else {
            $(this).addClass('selected');
            var addingId = $(this).attr('id');
            $('.'+addingId).hide();
        }
    });

    $('#search').hideseek({
        hidden_mode: true
        ignore: '.selected'
    });
});