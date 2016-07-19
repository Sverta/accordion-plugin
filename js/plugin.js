
(function($) {
    jQuery.fn.accordionBlock = function() {

        $(this).find('ul').not('.active').hide();
        $(this).find('a').click(function() {
            if(false == $(this).next().hasClass('.active')) {
                $('.active').removeClass('.active').slideUp("normal");
                $(this).addClass('.active');
            }
            $(this).next().slideToggle("normal");
        });
    };
})(jQuery);
