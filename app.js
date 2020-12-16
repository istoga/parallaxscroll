function fadeOut() {
    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0
    });
    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut, 
        delay: 2
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut

    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3, 
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.from
}
// continue at https://www.youtube.com/watch?v=2WXo5AXjbn4

