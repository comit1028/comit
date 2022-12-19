$(function () {
  var centerShelfs,
    $body = $('body'),
    $num1Shelf = $('.shelf.num1'),
    $num2Shelf = $('.shelf.num2'),
    $num3Shelf = $('.shelf.num3'),
    $num4Shelf = $('.shelf.num4'),
    $num5Shelf = $('.shelf.num5');

  centerShelfs = function () {
    var topShelfPosition = $body.height() / 2;

    $num1Shelf.css('top', topShelfPosition);
    $num2Shelf.css('top', topShelfPosition + 200);
    $num3Shelf.css('top', topShelfPosition + 400);
    $num4Shelf.css('top', topShelfPosition + 600);
    $num5Shelf.css('top', topShelfPosition + 800);
  };

  moveToShelf = function (e) {
    e.preventDefault();
    $body.attr('class', '');
    $body.addClass(e.target.id);
  };

  // bind events
  $(window).on('resize', centerShelfs);
  $('.nav a').on('click', moveToShelf);

  // move to start position
  centerShelfs();
});
