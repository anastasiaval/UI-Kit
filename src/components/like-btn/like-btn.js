$(function() {
    $('.like-btn').on('click', (e) => {
        let target = $(e.currentTarget);
        let icon = target.find('.like-btn__icon');
        let num = target.find('.like-btn__num');
        target.toggleClass("like-btn_liked");
        if (target.hasClass("like-btn_liked")) {
            icon.text('favorite');
            num.text(+num.text() + 1);
        } else {
            icon.text('favorite_border');
            num.text(+num.text() - 1);
        }
    });
});

