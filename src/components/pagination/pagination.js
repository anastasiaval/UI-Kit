$(function() {

    $('.pagination').pagination({
        dataSource: function () {
            let result = [];
            for (let i = 1; i < 170; i++) {
                result.push(i);
            }
            return result;
            }(),
        pageSize: 12,
        pageRange: 1,
        prevText: '<i class="material-icons">arrow_backward</i>',
        nextText : '<i class="material-icons">arrow_forward</i>',
        footer: function(currentPage, totalPage, totalNumber) {
            let num = 100;
            let plus = '+';
            let to = this.pageSize * currentPage;
            let from = to - (this.pageSize - 1);
            if (to > totalNumber) {
                to = totalNumber;
            }
            if (to > num) {
                num = totalNumber;
                plus = '';
            }
            return `${from} - ${to} из ${num}${plus} вариантов аренды`;
        },
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (response, pagination) {
            let dataHtml = '<div>';
            $.each(response, function (index, item) {
                dataHtml += '<span>' + item + '</span>'; // content
            });
            dataHtml += '</div>';
            //$('.pagination-content').html(dataHtml);
            }
    })
});

