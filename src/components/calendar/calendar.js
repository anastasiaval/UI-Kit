import { datepicker } from 'components/input/input';

const $calendarDatepicker = $('.calendar');
const calendarDatepickerOnSelect = '';

datepicker($calendarDatepicker, calendarDatepickerOnSelect, "dd.mm.yy");
$( "<button>", {text: 'применить', class: 'ui-datepicker-close',})
    .appendTo( $calendarDatepicker.find('.ui-datepicker-buttonpane') );

$calendarDatepicker.on('click', (e) => {
    if ($('.ui-datepicker-buttonpane').children().length === 1) {
        $('.ui-datepicker-buttonpane').append('<button class="ui-datepicker-close">применить</button>');
    }

    if ($(e.target).text() === 'очистить') {
        $calendarDatepicker.datepicker('setDate', [null, null]);
    }
});

