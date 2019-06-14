$(function () {
    const rangeSlider = $('.range-slider');

    rangeSlider.slider({
        animate: "slow",
        max: 15500,
        min: 100,
        step: 100,
        range: true,
        values: [5000, 10000]
    });

    rangeSlider.on('slidestop', (event, ui) => {
        $('.range-slider__text').text(`${ui.values[0]}₽ - ${ui.values[1]}₽`);
    });
});

