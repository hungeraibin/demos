var $li = $('.wrapper > ul > li');
$li.on('mouseenter', function () {
    $(this).addClass('active');
});
$li.on('mouseleave', function () {
    $(this).removeClass('active');
});