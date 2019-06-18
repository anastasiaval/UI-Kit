import { datepicker } from 'components/input/input';

const $searchRoomDatepicker = $('.input_search-room-calendar');
const searchRoomDatepickerOnSelect = function(dateText, inst, extensionRange) {
    $searchRoomDatepicker[0].value = extensionRange.startDateText;
    $searchRoomDatepicker[1].value = extensionRange.endDateText;
};

datepicker($searchRoomDatepicker, searchRoomDatepickerOnSelect, "dd.mm.yy");

