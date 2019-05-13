let $dropdown = $('.dropdown__default');
let $apply = $('.dropdown__option_apply');

$dropdown.on('click', (e) => {
    $(e.currentTarget).siblings('.dropdown__expanded').slideToggle(200);
});

$apply.on('click', (e) => {
    $(e.currentTarget).closest('.dropdown__expanded').slideUp(200);
});

