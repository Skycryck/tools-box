//Au click sur le lien scroll jusqu'a l'id #haut en 1000ms
$('a[href^="#haut"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
