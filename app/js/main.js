$(function () {

    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });

    Fancybox.bind("[data-fancybox]", {

    });

    $('.filter-price__input').ionRangeSlider({
        type: 'double',
        prefix: '$',
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.filter-recent__star, .product__star').rateYo({
        rating: 3.5,
        starWidth: "11px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

});

