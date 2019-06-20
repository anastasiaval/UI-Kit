import { ratingStars } from 'components/rate-btn/rate-btn';
import 'components/rate-btn/star-rating-plugin';
import './room-cards.json';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
}
importAll(require.context('./img', false, /\.jpe?g$/));

class RoomCards {
    constructor(arr, container) {
        this.arr = arr;
        this.container = container;
    }

    render() {
        for (let i of this.arr) {
            this.renderItem(i);
        }
    }

    renderItem(item) {
        item.price = item.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

        let result = `<div class="room-cards__item">
                        <div class="room-cards__slider">`;

        for (let i = 1; i < 5; i++) {
            result += `<div><img class="room-cards__slider-img_image-${i}" src="img/room-${item.number}.jpg" 
                            alt="room-${item.number}"></div>`;
        }

        result += `</div>
                   <div class="room-cards__info-wr">
                       <div class="room-cards__info">
                           <div>
                               <span class="room-cards__info_num">№</span>
                               <span class="room-cards__info_number">${item.number}</span>`;

        if (item.category !== null) {
            result += `<span class="room-cards__info_cat"> ${item.category}</span>`;
        }

        result += `</div>
                   <div>
                       <span class="room-cards__info_text-num">${item.price}${item.currency}</span>
                       <span class="room-cards__info_text-num room-cards__info_text">в сутки</span>
                   </div>
                   </div>
                       <div class="room-cards__info">
                           <div class="rate" id="rate-${item.number}"></div>
                           <div>
                               <span class="room-cards__info_text-num">${item.reviews}</span>
                               <span class="room-cards__info_text-num room-cards__info_text">Отзывов</span>
                           </div>
                       </div>
                   </div>`;

        $(this.container).append(result);
        $(this.container).find('.room-cards__slider').last().slick({
            dots: true,
            arrows: true,
            nextArrow: '<i class="material-icons room-cards__arrow room-cards__arrow_right" aria-label="Next">' +
                'keyboard_arrow_right</i>',
            prevArrow: '<i class="material-icons room-cards__arrow room-cards__arrow_left" aria-label="Previous">' +
                'keyboard_arrow_left</i>',
        });
        ratingStars($(`#rate-${item.number}`), `${item.rating}`);
    }
}

$.ajax({
    type: 'GET',
    url: 'assets/db/room-cards.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        let cards = new RoomCards(data, '.room-cards');
        cards.render();
    },
    error: function (errorObj) {
        console.log(errorObj);
    }
});

