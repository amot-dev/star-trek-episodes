$(document).ready(function(){
    setTitleHeight();
    $(window).resize(function() {
        setTitleHeight();
    })
    function setTitleHeight() {
        $('h3').each(function() {
            //set padding at top of episode to height of title + $standard-margin
            $(this).parent().css('padding-top', ($(this).outerHeight(true) + 4));
        });
    };
});