$(document).load(function () {
  var centerShelfs,
    $body = $('body'),
    $topShelf = $('.shelf.num1'),
    $middleShelf = $('.shelf.num2'),
    $bottomShelf = $('.shelf.num3'),
    $addedShelf = $('.shelf.num4');

  centerShelfs = function () {
    var topShelfPosition = $body.height() / 2;

    $topShelf.css('top', topShelfPosition);
    $middleShelf.css('top', topShelfPosition + 200);
    $bottomShelf.css('top', topShelfPosition + 400);
    $addedShelf.css('top', topShelfPosition + 600);
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
