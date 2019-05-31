$(function () {

    function ratingStars(selector, rating) {
        selector.addRating({
            icon: 'star',
            fieldId : 'rating',
            selectedRatings: rating
        });
    }

    ratingStars($('#rate-1'), 4);
    ratingStars($('#rate-10'), 5);

});

