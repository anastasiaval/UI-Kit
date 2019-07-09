export class Dropdown {
    constructor(settings, dropdown) {
        this.settings = settings;
        this.dropdown = dropdown;
        this.options = $(this.dropdown).next('.dropdown__options');
    }

    init() {
        this.optionsShowToggle($(this.dropdown));
    }

    /**
     * Shows and hides dropdown options.
     * @param {Object} $dropdown
     */
    optionsShowToggle($dropdown) {
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

            this.options.slideToggle(200);
            $(e.currentTarget).toggleClass('dropdown__drop_exp');
        });

        $(document).mouseup(e => {
            if (!$dropdown.is(e.target)
                && $dropdown.has(e.target).length === 0
                && !this.options.is(e.target)
                && this.options.has(e.target).length === 0
            ) {
                $dropdown.find('.dropdown__icon').text('keyboard_arrow_down');
                this.options.slideUp(200);
                $dropdown.removeClass('dropdown__drop_exp');
            }
        });

        $('.dropdown__btn_apply').on('click', () => {
            this.options.slideUp(200);
            $dropdown.removeClass('dropdown__drop_exp');
            $dropdown.find('.dropdown__icon').text('keyboard_arrow_down');
        });
    }
}

