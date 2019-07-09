import { datepicker } from 'components/input/input';
import { GuestsDropdown } from 'components/dropdown/GuestsDropdown';
import { guestsSettings } from 'components/dropdown/dropdown-init';

const $searchRoomDatepicker = $('.input_search-room-calendar');
const searchRoomDatepickerOnSelect = function(dateText, inst, extensionRange) {
    $searchRoomDatepicker[0].value = extensionRange.startDateText;
    $searchRoomDatepicker[1].value = extensionRange.endDateText;
};

datepicker($searchRoomDatepicker, searchRoomDatepickerOnSelect, "dd.mm.yy");

const guests4Dropdown = new GuestsDropdown(guestsSettings, '.dropdown__drop_guests-4');
guests4Dropdown.init();

