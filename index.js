$("#landing-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#title').offset().top
    }, 700);
});
$("#home-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#landing').offset().top
    }, 700);
});
$("#skills-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 700);
});
$("#experience-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 700);
});
$("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $('#about-me').offset().top
    }, 700);
});
