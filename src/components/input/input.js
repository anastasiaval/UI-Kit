// masked input
$(function() {
    let InputMask = require('inputmask');
    let $inputDate = $('.input_date');
    let im = new InputMask("datetime", {
        inputFormat: "dd.mm.yyyy",
        placeholder: "ДД.ММ.ГГГГ",
        inputEventOnly: true
    });

    im.mask($inputDate);

});

// datepicker
require('jquery-ui-bundle');

function datepicker($input, onSelect, format) {
    $input.datepicker({
        showButtonPanel: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        minDate: 0,
        duration: "fast",
        showAnim: 'slideDown',
        closeText: "применить",
        prevText: "",
        nextText: "",
        currentText: "очистить",
        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Нед",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
        range: 'period',
        numberOfMonths: 1,
        dateFormat: format,
        onSelect: onSelect
    });

    $input.on('focus blur', (e) => {
        let _gotoTodayOrig = $.datepicker._gotoToday;
        e.type === 'focus' ?
            $.datepicker._gotoToday = function () {
                $input.datepicker('setDate', [null, null])
            }
            : $.datepicker._gotoToday = _gotoTodayOrig;
    });
}

$(function () {
    const $datepicker = $('.form__wrapper').find('.input_datepicker');
    const datepickerOnSelect = function(dateText, inst, extensionRange) {
        $datepicker[0].value = extensionRange.startDateText;
        $datepicker[1].value = extensionRange.endDateText;
    };

    const $filterDatepicker = $('.input_filter-datepicker');
    const filterDatepickerOnSelect = function(dateText, inst, extensionRange) {
        $filterDatepicker.val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
    };

    datepicker($datepicker, datepickerOnSelect, "dd.mm.yy");
    datepicker($filterDatepicker, filterDatepickerOnSelect, "dd M");
});

