$(function () {


  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.shop-content__inner').addClass('shop-content__inner--list')
  });

  $('.button-grid').on('click', function () {
    $('.shop-content__inner').removeClass('shop-content__inner--list')
  });

  $('.button-list').on('click', function () {
    $('.shop-content__item').addClass('shop-content__item--row')
  });

  $('.button-grid').on('click', function () {
    $('.shop-content__item').removeClass('shop-content__item--row')
  });

  $('.button-grid').on('click', function () {
    $('.card__products').addClass('card__products-none')
  });

  $('.button-list').on('click', function () {
    $('.card__products').removeClass('card__products-none')
  });

  $('.button-list').on('click', function () {
    $('.pagination').addClass('pagination__column')
  });

  $('.button-grid').on('click', function () {
    $('.pagination').removeClass('pagination__column')
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
  });

  $(".star-list").rateYo({
    rating: 3.6,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true,
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  
});