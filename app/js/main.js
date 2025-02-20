$(function () {

    $('.detalis__input').styler({});

    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });

    $('.detalis-slider__thumbs').slick({
        asNavFor: '.detalis-slider__bigs',
        focusOnSelect: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        vertical: true,
        draggable: false,
    });

    $('.detalis-slider__bigs').slick({
        asNavFor: '.detalis-slider__thumbs',
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: false,
        arrows: false,
        fade: true,
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

    $('.filter-recent__star, .product__star, .detalis__star').rateYo({
        rating: 3.5,
        starWidth: "11px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

});

