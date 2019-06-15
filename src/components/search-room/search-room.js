import { datepicker } from 'components/input/input';

const $cardDatepicker = $('.input_card-datepicker');
const cardDatepickerOnSelect = function(dateText, inst, extensionRange) {
    $cardDatepicker[0].value = extensionRange.startDateText;
    $cardDatepicker[1].value = extensionRange.endDateText;
};

datepicker($cardDatepicker, cardDatepickerOnSelect, "dd.mm.yy");

