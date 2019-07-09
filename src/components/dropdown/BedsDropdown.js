import { Dropdown } from 'components/dropdown/Dropdown';

export class BedsDropdown extends Dropdown {
    constructor(settings, dropdown) {
        super(settings, dropdown);
        this.optionsObj = {
            bedrooms: null,
            beds: null,
            bathrooms: null,
        };
    }

    init() {
        super.init();
        this.counterInit();
    }

    counterInit() {
        this.optionsObj.bedrooms = +(this.options.find('.text_bedrooms').text());
        this.optionsObj.beds = +(this.options.find('.text_beds').text());
        this.optionsObj.bathrooms = +(this.options.find('.text_bathrooms').text());
        this.counterDisableCheck();
        this.counterClick();
        this.resultString();
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
            if (this.optionsObj[i] === 16) {
                moreBtn.filter(`.${i}`).addClass('dropdown__counter-btn_disabled');
            }
            if (this.optionsObj[i] > 0) {
                lessBtn.filter(`.${i}`).removeClass('dropdown__counter-btn_disabled');
            }
        }

    }

    /**
     * "+/-" buttons handler.
     */
    counterClick() {
        this.options.find('.dropdown__counter-btn_more').on('click', e =>{
            let field = this.whatField(e);

            if (this.optionsObj[field] < 16) {
                this.counterIncrease(field, e);
                this.counterOnChange();
            }
        });

        this.options.find('.dropdown__counter-btn_less').on('click', e => {
            let field = this.whatField(e);

            if (this.optionsObj[field] > 0) {
                this.counterDecrease(field, e);
                this.counterOnChange();
            }
        });
    }

    counterOnChange() {
        this.counterDisableCheck();
        this.resultString();
    }

    /**
     * @param {MouseEvent} e Click on "+/-" button.
     * @returns {string} Current option.
     */
    whatField(e) {
        let field = $(e.target).siblings('.text');
        if ($(field).hasClass('text_bedrooms')) {
            return 'bedrooms';
        }
        if ($(field).hasClass('text_beds')) {
            return 'beds';
        }
        if ($(field).hasClass('text_bathrooms')) {
            return 'bathrooms';
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

        if (this.optionsObj.bedrooms + this.optionsObj.beds + this.optionsObj.bathrooms === 0) {
            $result.text(this.settings.defaultText);
        } else {
            let resultText = [];

            for (let i in this.optionsObj) {
                if (this.optionsObj[i]) {
                    let word = this.wordForm(this.optionsObj[i], this.settings.resultWords[i]);
                    resultText.push(`${this.optionsObj[i]} ${word}`);
                }
            }

            if (resultText.length >= 2) {
                resultText = resultText.slice(0, 2);
                $result.text(`${resultText.join(', ')}...`);
            } else {
                $result.text(`${resultText.join(', ')}`);
            }
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

