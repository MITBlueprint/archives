// only to be included on homepage


if ($(window).width() > 650) {

    $(function() {

        $(document).on('scroll', function() {

            var scrollPos = $(document).scrollTop();

            // scroll menu styles
            if (scrollPos > 560) {
                $('nav.homepage').removeClass('homepage').addClass('page');
                $('.mast').addClass('padded');
            } else {
                $('.mast').removeClass('padded');
                $('nav').removeClass('page').addClass('homepage');
            }

        });


        // check cookie
        var visited = $.cookie('blueprint_visited');

        if (visited == null) {
            $('body').scrollTop(0);
            $('head').append('<link rel="stylesheet" href="/css/animate-custom.css">');
            $('#container').prepend('<div id="firstoverlay" class="animated fadeOut"></div>');
            $('.leader h2 span').addClass('fadeIn').addClass('animated');
            $('.leader a.register').addClass('fadeInUpBig').addClass('animated');
            setTimeout(function() {
                $('#firstoverlay').remove();
            }, 4000);

            $.cookie('blueprint_visited', 'yes');
        }

        // set cookie
        $.cookie('blueprint_visited', 'yes', {
            expires: 365,
            path: '/'
        });

    });

}
