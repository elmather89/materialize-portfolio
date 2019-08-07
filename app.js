$(document).ready(function () {

    // initialize hero slider
    $('.slider').slider();

    // initialize floating button
    $('.fixed-action-btn').floatingActionButton();

    // toast on timer, only once per session
    var loadTime = moment().format("ss");
    // console.log(loadTime);
    
    time();
    function time() {
        var now = moment().format("ss");
        var diff = now - loadTime;
        // console.log(now);
        console.log(diff);

        if (diff == 10 && !sessionStorage.alreadyClicked) {
            M.toast({html: 'You can contact me using the floating button on the bottom right!', classes: 'rounded', displayLength: 5500});
            sessionStorage.alreadyClicked = 1;
            return;
        }
        if (sessionStorage.alreadyClicked) {
            return;
        }
        setTimeout(time, 1000);
    };

    // on clicks
    $("#resume-btn").on("click", function () {
        window.open("./assets/images/ElizabethMatherCV2019web.pdf");
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

    // GSAP (animation platform) =============================
    var btnTween = TweenMax.from(".btn-floating.pulse", 2, { x: 100, 
        ease:Bounce.easeOut })
        .delay(1);

    var cardTween = TweenMax.from(".card.large", 1, { x: 1000 });

    var aboutcardTween = TweenMax.from(".about-card", 1, { x: 1000 });

});