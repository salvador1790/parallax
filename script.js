let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.bg3', 3, {y: -300})
    .to('.bg2', 3, {y: -200}, '-=3')
    .fromTo('.bg1', {y: -50}, {y: 0, duration: 3}, '-=3')
    .to('.content', 3, {top: "0%"}, '-=3')
    .fromTo('.content-images', 3, {opacity: 0}, {opacity: 1, duration: 1.5})
    .fromTo('.text', 3, {opacity: 0}, {opacity: 1, duration: 1.5})

    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "300%",
        triggerHook: 0
    })

        .setTween(timeline)
        .setPin('section')
        .addTo(controller)