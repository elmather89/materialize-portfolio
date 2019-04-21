$(document).ready(function(){

    // initialize hero slider
    $('.slider').slider();

    // initialize floating button
    $('.fixed-action-btn').floatingActionButton();

    $("#write-btn").on("click", function() {
        window.open('mailto:elizabethleighmather@gmail.com?subject=Hello&body=body');
    });

    $("#linkedin-btn").on("click", function() {
        window.open("https://www.linkedin.com/in/liz-mather-kansascity");
    });

    $("#github-btn").on("click", function() {
        window.open("https://github.com/elmather89");
    })
});