import { datepicker } from 'components/input/input';
import { GuestsDropdown } from 'components/dropdown/GuestsDropdown';
import { guestsSettings } from 'components/dropdown/dropdown-init';

const $roomBookingDatepicker = $('.input_room-booking-calendar');
const roomBookingDatepickerOnSelect = function(dateText, inst, extensionRange) {
    $roomBookingDatepicker[0].value = extensionRange.startDateText;
    $roomBookingDatepicker[1].value = extensionRange.endDateText;
};

datepicker($roomBookingDatepicker, roomBookingDatepickerOnSelect, "dd.mm.yy");

const guests5Dropdown = new GuestsDropdown(guestsSettings, '.dropdown__drop_guests-5');
guests5Dropdown.init();

