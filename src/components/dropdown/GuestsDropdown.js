import { Dropdown } from 'components/dropdown/Dropdown';

export class GuestsDropdown extends Dropdown {
    constructor(settings, dropdown) {
        super(settings, dropdown);
        this.optionsObj = {
            adults: null,
            children: null,
            infants: null,
        };
    }

    init() {
        super.init();
        this.counterInit();
    }

    counterInit() {
        this.optionsObj.adults = +(this.options.find('.text_adults').text());
        this.optionsObj.children = +(this.options.find('.text_children').text());
        this.optionsObj.infants = +(this.options.find('.text_infants').text());
        this.counterDisableCheck();
        this.counterClick();
    }

    /**
     * Checks if "+/-" buttons must be disabled, adds or removes css class.
     */
    counterDisableCheck() {

        const lessBtn = this.options.find('.dropdown__counter-btn_less');
        const moreBtn = this.options.find('.dropdown__counter-btn_more');

        for (let i in this.optionsObj)  {
            if (this.optionsObj[i] === 0) {
                lessBtn.filter(`.${i}`).addClass('dropdown__counter-btn_disabled');
            }
            if (this.optionsObj[i] > 0) {
                lessBtn.filter(`.${i}`).removeClass('dropdown__counter-btn_disabled');
            }
        }

        if (this.optionsObj.infants === 5) {
            moreBtn.filter('.infants').addClass('dropdown__counter-btn_disabled');
        }
        if (this.optionsObj.adults + this.optionsObj.children === 16) {
            moreBtn.filter('.adults').addClass('dropdown__counter-btn_disabled');
            moreBtn.filter('.children').addClass('dropdown__counter-btn_disabled');
        }
        if (this.optionsObj.adults === 1 && this.optionsObj.children + this.optionsObj.infants > 0) {
            lessBtn.filter('.adults').addClass('dropdown__counter-btn_disabled');
        }
    }

    /**
     * Clear button handler.
     */
    clearBtn() {
        let optionBtn = this.options.find('.dropdown__option_btn');

        if (optionBtn) {
            if (this.optionsObj.adults > 0) {
                let clearBtn = optionBtn.find(':first-child');
                clearBtn.addClass('dropdown__btn_clear');
                clearBtn.text('очистить');
            }
            if (this.optionsObj.adults === 0) {
                let clearBtn = optionBtn.find(':first-child');
                clearBtn.removeClass('dropdown__btn_clear');
                clearBtn.text('');
            }
        }

        this.options.find('.dropdown__btn_clear').on('click', () => {
            this.optionsObj.adults = this.optionsObj.children = this.optionsObj.infants = 0;
            this.options.find('.text_adults').text(this.optionsObj.adults);
            this.options.find('.text_children').text(this.optionsObj.children);
            this.options.find('.text_infants').text(this.optionsObj.infants);
            $(this.dropdown).find('span').text(this.settings.defaultText);
        });
    }

    /**
     * "+/-" buttons handler.
     */
    counterClick() {
        this.options.find('.dropdown__counter-btn_more').on('click', e =>{
            let field = this.whatField(e);

            if (field === 'infants') {
                if (this.optionsObj.adults === 0) {
                    this.optionsObj.adults++;
                    this.options.find('.text_adults').text(this.optionsObj.adults);
                }
                if (this.optionsObj.infants < 5) {
                    this.counterIncrease(field, e);
                    this.counterOnChange();
                }
            }

            if (field === 'children') {
                if (this.optionsObj.adults === 0) {
                    this.optionsObj.adults++;
                    this.options.find('.text_adults').text(this.optionsObj.adults);
                }
                if (this.optionsObj.adults + this.optionsObj.children < 16) {
                    this.counterIncrease(field, e);
                    this.counterOnChange();
                }
            }

            if (field === 'adults') {
                if (this.optionsObj.adults + this.optionsObj.children < 16) {
                    this.counterIncrease(field, e);
                    this.counterOnChange();
                }
            }
        });

        this.options.find('.dropdown__counter-btn_less').on('click', e => {
            let field = this.whatField(e);

            if (field === 'adults'
                && this.optionsObj.children + this.optionsObj.infants > 0) {
                if (this.optionsObj.adults > 1) {
                    this.counterDecrease(field, e);
                    this.counterOnChange();
                }
            }

            if (field === 'adults'
                && this.optionsObj.adults > 0
                && this.optionsObj.children + this.optionsObj.infants === 0
                || field === 'children' && this.optionsObj.children > 0
                || field === 'infants' && this.optionsObj.infants > 0)
            {
                this.counterDecrease(field, e);
                this.counterOnChange();
            }

        });
    }

    counterOnChange() {
        this.counterDisableCheck();
        this.clearBtn();
        this.resultString();
    }

    /**
     * @param {MouseEvent} e Click on "+/-" button.
     * @returns {string} Current option.
     */
    whatField(e) {
        let field = $(e.target).siblings('.text');
        if ($(field).hasClass('text_adults')) {
            return 'adults';
        }
        if ($(field).hasClass('text_children')) {
            return 'children';
        }
        if ($(field).hasClass('text_infants')) {
            return 'infants';
        }
    }

    /**
     * Adds 1 to current option value.
     * @param {string} field Current option.
     * @param {MouseEvent} e Click on "+" button.
     */
    counterIncrease(field, e) {
        let currentText = $(e.target).siblings('.text').text();
        currentText++;
        $(e.target).siblings('.text').text(currentText);
        this.optionsObj[field]++;
    }

    /**
     * Subtracts 1 from current option value.
     * @param {string} field Current option.
     * @param {MouseEvent} e Click on "-" button.
     */
    counterDecrease(field, e) {
        let currentText = $(e.target).siblings('.text').text();
        currentText--;
        $(e.target).siblings('.text').text(currentText);
        this.optionsObj[field]--;
    }

    /**
     * Result string with selected options and values or default text if all options values = 0
     */
    resultString() {
        const $result = $(this.dropdown).find('span');

        if (this.optionsObj.adults + this.optionsObj.children + this.optionsObj.infants === 0) {
            $result.text(this.settings.defaultText);
        } else {
            let guests = this.optionsObj.adults + this.optionsObj.children;
            let guestsWordForm = this.wordForm(guests,this.settings.resultWords.guests);
            let infantsString = '';
            if (this.optionsObj.infants) {
                let infantsWordForm = this.wordForm(this.optionsObj.infants, this.settings.resultWords.infants);
                infantsString = `, ${this.optionsObj.infants} ${infantsWordForm}`;
            }
            $result.text(`${guests} ${guestsWordForm}${infantsString}`);
        }
    }

    /**
     * @param {int} num Option value.
     * @param {Array} wordForms Three forms of a word.
     * @returns {string} Correct form.
     */
    wordForm(num, wordForms) {
        let cases = [2, 0, 1, 1, 1, 2];
        return wordForms[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5] ];
    }
}

