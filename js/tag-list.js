$(document).ready(function(){
    //load tag list into page
    $(".tag-list").load("tag-list.xml li");

    setTimeout(function(){
        //init hideseek
        $('#search').hideseek({
            //hidden_mode: true,
            ignore: '.selected, .removed'
        });

        //remove irrelevant tag buttons
        $('.tag-list').children().each(function() {
            var current_tag = $(this).attr('id');
            if (!$('.' + current_tag).length) {
                $(this).remove();
            }
        });

        //on clicking a tag
        $('.tag-list').children().click(function(){

            //go through different states
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected').addClass('removed');
            }
            else if ($(this).hasClass('removed')) {
                $(this).removeClass('removed');
            }
            else {
                $(this).addClass('selected');
            }

            setShownTags();

        });
    }, 50);
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
