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
// translation from https://github.com/jquery/jquery-ui/blob/master/ui/i18n/datepicker-ru.js
$(function() {
    let $datepicker = $('.input_datepicker');
    console.log($datepicker);
    $datepicker.datepicker({
        showButtonPanel: true,
        showOtherMonths: true,
        closeText: "применить",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "очистить",
        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" });

    $datepicker.on('focus blur', (e) => {
        let $icon = $(e.currentTarget).siblings('.input__icon');
        e.type === 'focus' ? $icon.text('keyboard_arrow_up') : $icon.text('keyboard_arrow_down');
    });

    // $('.ui-datepicker-calendar').append([
    //     $('<div/>',{class: "ui-datepicker-btn"}).append([
    //         $('<span/>',{class: "clear-btn", text: 'очистить'}),
    //         $('<span/>',{class: "apply-btn", text: 'применить'})
    //     ])
    // ]);


});

