$(function () {
    let $checkboxExp = $('.checkbox-exp');
    $checkboxExp.on('click', (e) => {
        let $icon = $(e.currentTarget).find('.checkbox-exp__icon');
        $icon.text() === 'keyboard_arrow_down' ? $icon.text('keyboard_arrow_up') : $icon.text('keyboard_arrow_down');

        let $exp = $(e.currentTarget).next('.checkbox-exp__options');
        $exp.slideToggle(200);
    });

    $(document).mouseup(e => {
        let $next = $checkboxExp.next('.checkbox-exp__options');
        if (!$checkboxExp.is(e.target)
            && $checkboxExp.has(e.target).length === 0
            && !$next.is(e.target)
            && $next.has(e.target).length === 0
        ) {
            $checkboxExp.find('.checkbox-exp__icon').text('keyboard_arrow_down');
            $next.slideUp(200);
        }
    });

});

