$(function () {
    let $menu = $('.header__nav-item');

    $menu.on('click', e => {
        $(e.currentTarget).find('.header__nav_sub').slideToggle(200);
        $(e.currentTarget).toggleClass('active');
        $menu.each(function () {
            if ($(this).hasClass('active') && this !== e.currentTarget) {
                $(this).removeClass('active');
                $(this).find('.header__nav_sub').slideUp(200);
            }
        });
    });

    $(document).mouseup( e => {
        if (!$menu.is(e.target)
            && $menu.has(e.target).length === 0) {
            $menu.find('.header__nav_sub').slideUp(200);
            $menu.removeClass('active');
        }
    });

});

