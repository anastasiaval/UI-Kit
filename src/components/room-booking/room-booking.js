import { datepicker } from 'components/input/input';

const $roomBookingDatepicker = $('.input_room-booking-calendar');
const roomBookingDatepickerOnSelect = function(dateText, inst, extensionRange) {
    $roomBookingDatepicker[0].value = extensionRange.startDateText;
    $roomBookingDatepicker[1].value = extensionRange.endDateText;
};

datepicker($roomBookingDatepicker, roomBookingDatepickerOnSelect, "dd.mm.yy");

