class Dropdown {
    constructor(settings) {
        this.settings = settings;
    }

    init(dropdown) {
        const $dropdown = $(dropdown);
        this.optionsShowToggle($dropdown);
    }

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
    }
}

class GuestsDropdown extends Dropdown {
    constructor(settings) {
        super(settings);
        this.optionsObj = {
            adults: null,
            children: null,
            infants: null,
        };
    }

    init(dropdown) {
        super.init(dropdown);
        this.counterInit();
    }

    counterInit() {
        this.optionsObj.adults = +($('.dropdown__options').find('.text_adults').text());
        this.optionsObj.children = +($('.dropdown__options').find('.text_children').text());
        this.optionsObj.infants = +($('.dropdown__options').find('.text_infants').text());

        this.counterDisableCheck();

        this.counterClick();
    }

    counterDisableCheck() {
        for (let i in this.optionsObj)  {
            if (this.optionsObj[i] === 0) {
                $(`.dropdown__counter-btn_less.${i}`).addClass('dropdown__counter-btn_disabled');
            }
            if (this.optionsObj.infants === 5) {
                $('.dropdown__counter-btn_more.infants').addClass('dropdown__counter-btn_disabled');
            }
            if (this.optionsObj.adults + this.optionsObj.children === 16) {
                $('.dropdown__counter-btn_more.adults').addClass('dropdown__counter-btn_disabled');
                $('.dropdown__counter-btn_more.children').addClass('dropdown__counter-btn_disabled');
            }
            if (this.optionsObj[i] > 0) {
                $(`.dropdown__counter-btn_less.${i}`).removeClass('dropdown__counter-btn_disabled');
            }
        }
    }

    counterClick() {
        $('.dropdown__counter-btn_more').on('click', e =>{
            let field = this.whatField(e);

            if (field === 'infants') {
                if (this.optionsObj.adults === 0) {
                    this.optionsObj.adults++;
                    $('.dropdown__options').find('.text_adults').text(this.optionsObj.adults);
                }
                if (this.optionsObj.infants < 5) {
                    console.log(this.optionsObj.infants);
                    this.counterIncrease(field, e);
                    this.counterDisableCheck();
                }
            }
        });
    }

    whatField(e) {
        let field = $(e.target).siblings('.text');
        if ($(field).hasClass('text_adults')) {
            field = 'adults';
        }
        if ($(field).hasClass('text_children')) {
            field = 'children';
        }
        if ($(field).hasClass('text_infants')) {
            field = 'infants';
        }
        return field;
    }

    counterIncrease(field, e) {
        let currentText = $(e.target).siblings('.text').text();
        currentText++;
        $(e.target).siblings('.text').text(currentText);
        this.optionsObj[field]++;
    }
}

class BedsDropdown extends Dropdown {
    constructor(settings) {
        super(settings);
        this.optionsObj = {
            bedrooms: null,
            beds: null,
            bathrooms: null,
        };
    }

    init(dropdown) {
        super.init(dropdown);
    }
}

const guestDropdown = new GuestsDropdown({
    maxGuests: 16,
    maxInfants: 5,
});

const bedsDropdown = new BedsDropdown({
    maxBeds: 16,
});

guestDropdown.init('.dropdown__drop_guests');
bedsDropdown.init('.dropdown__drop_beds');