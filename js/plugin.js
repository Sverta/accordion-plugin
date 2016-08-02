(function($) {
    jQuery.fn.accordionBlock = function() {

        $(this).find('ul').hide();
        $(this).find('a').click(function() {
            if(false == $(this).next().is(':visible')) {
                $('ul').find('ul').slideUp("normal");
            }
            $(this).next().slideToggle("normal");
        });
    };
})(jQuery);
