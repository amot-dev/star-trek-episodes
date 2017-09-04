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

    //TAG CODE
    if ($('.tag-list').length) {

        //init hideseek
        $('#search').hideseek({
            hidden_mode: true,
            ignore: '.selected, .removed'
        });

        //on selecting a tag
        $('.tag-list').children().click(function(){

            //remove the removed class if it exists
            if ($(this).hasClass('removed')) {$(this).removeClass('removed');}

            //add and remove selected class
            if ($(this).hasClass('selected')) {$(this).removeClass('selected');}
            else {$(this).addClass('selected');}

            setShownTags();

        });

        //on removing a tag
        $('.tag-list').children().contextmenu(function(event){

            event.preventDefault();

            //remove the selected class if it exists
            if ($(this).hasClass('selected')) {$(this).removeClass('selected');}

            //add and remove removed class
            if ($(this).hasClass('removed')) {$(this).removeClass('removed');}
            else {$(this).addClass('removed');}

            setShownTags();

        });

    }

    //TITLE PADDING CODE
    $(window).on("resize", function () {
        
        $('h3').each(function() {
            //set padding at top of episode to height of title + $standard-margin
            $(this).parent().css('padding-top', ($(this).outerHeight(true) + 4));
        });

    }).resize();
    
});

//FUNCTIONS
function setShownTags() {

    //add all selected and removed tags to arrays
    var shown_tags = addToArray('.selected');
    var removed_tags = addToArray('.removed');

    //exec if an array isn't empty
    if (shown_tags.length || removed_tags.length) {

        //convert tag arrays to strings
        var shown_tags_concocted = classArrayToString(shown_tags);
        var removed_tags_concocted = classArrayToString(removed_tags);
                
        //show only selected episodes
        if (shown_tags.length) {
            $('.episode').hide();
            $(shown_tags_concocted).show();
        }
        else {
            $('.episode').show();
        }

        //hide removed episodes
        if (removed_tags.length) {
            $(removed_tags_concocted).hide();
        }
    }

    //if both arrays are empty
    else {
        $('.episode').show();
    }

    //hide season header if all children are hidden
    $('.season').each(function() {

        //count episdes shown
        var episodes_shown = 0;
        $(this).find('.episode').each(function() {
            if ($(this).css('display') != 'none') {
                episodes_shown += 1;
            }
        })

        //hide header if no episodes are shown
        if (episodes_shown == 0) {
            $(this).find('h2').hide();
        }
        else {
            $(this).find('h2').show();
        }
        
    });
        
}

function addToArray(element_to_ID) {
    var temp_array = []
    $(element_to_ID).each(function() {
        var selected_ID = $(this).attr('id');
        temp_array.push(selected_ID);
    })
    return temp_array;
}

function classArrayToString(arrayToConvert) {
    var temp_string = '';
    for (var i = 0; i < arrayToConvert.length; i++) {
        temp_string += '.' + arrayToConvert[i];
    }
    return temp_string;
}