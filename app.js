$(document).ready(function () {

    // materialize js =======================================
    // initialize hero slider
    $('.slider').slider();

    // initialize floating button
    $('.fixed-action-btn').floatingActionButton();

    $("#resume-btn").on("click", function () {
        window.open("https://static1.squarespace.com/static/584ae46c20099e929d2247d6/t/5cd32dfbf9345f0001a02ff3/1557343739392/ElizabethMatherCV_2019.pdf");
    });

    $("#write-btn").on("click", function () {
        window.open('mailto:elizabethleighmather@gmail.com?subject=Hello&body=');
    });

    $("#linkedin-btn").on("click", function () {
        window.open("https://www.linkedin.com/in/liz-mather-kansascity");
    });

    $("#github-btn").on("click", function () {
        window.open("https://github.com/elmather89");
    });

    // end materialize js ====================================

    // GSAP (animation platform) =============================
    var btnTween = TweenMax.from(".btn-floating.pulse", 2, { x: 100, 
        ease:Bounce.easeOut })
        .delay(1);

    var cardTween = TweenMax.from(".card.large", 1, { x: 1000 });

    // end GSAP ==============================================

});