$(function () {
    let $dropdown = $('.dropdown__drop');
    $dropdown.on('click', e => {
        $dropdown.each(function() {
            if ($(this).hasClass('dropdown__drop_exp') && this !== e.currentTarget) {
                $(this).removeClass('dropdown__drop_exp');
                $('.dropdown__icon').text('keyboard_arrow_down');
                $('.dropdown__options').slideUp(200);
            }
        });

        let $icon = $(e.currentTarget).find('.dropdown__icon');
        $icon.text() === 'keyboard_arrow_down' ? $icon.text('keyboard_arrow_up') : $icon.text('keyboard_arrow_down');

        let $exp = $(e.currentTarget).next('.dropdown__options');
        $exp.slideToggle(200);
        $(e.currentTarget).toggleClass('dropdown__drop_exp');
    });

    $(document).mouseup(e => {
        let $next = $dropdown.next('.dropdown__options');
        if (!$dropdown.is(e.target)
            && $dropdown.has(e.target).length === 0
            && !$next.is(e.target)
            && $next.has(e.target).length === 0
        ) {
            $dropdown.find('.dropdown__icon').text('keyboard_arrow_down');
            $next.slideUp(200);
            $dropdown.removeClass('dropdown__drop_exp');
        }
    });
});

