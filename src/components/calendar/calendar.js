import { datepicker } from 'components/input/input';

const $calendarDatepicker = $('.calendar');
const calendarDatepickerOnSelect = '';

datepicker($calendarDatepicker, calendarDatepickerOnSelect, "dd.mm.yy");
$( "<button>", {text: 'применить', class: 'ui-datepicker-close',})
    .appendTo( $calendarDatepicker.find('.ui-datepicker-buttonpane') );

