let InputMask = require('inputmask');

let $inputDate = $('.input_date');
let im = new InputMask("datetime", {
    inputFormat: "dd.mm.yyyy",
    placeholder: "ДД.ММ.ГГГГ",
    inputEventOnly: true
});

im.mask($inputDate);

