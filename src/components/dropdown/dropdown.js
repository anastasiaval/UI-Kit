let $dropdown = $('.dropdown__default');
let $expanded = $('.dropdown__expanded');
let $apply = $('.dropdown__option_apply');

$dropdown.on('click', () => {
    $expanded.slideToggle(200);
});

$apply.on('click', () => {
    $expanded.slideUp(200);
});

