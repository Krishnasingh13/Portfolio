var tl = gsap.timeline();

tl
    .from('nav img', {
        delay:6,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }).from('nav a ,nav i', {
        duration: 1.5,
        stagger: .2,
        y: 20,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=.5').from('#smline', {
        duration: 1,
        width: 0,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=.5').from('.anim', {
        duration: 2,
        stagger: .5,
        y: 20,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=.5').from('section>img', {
        duration: 1,
        scale: 2,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1').from('#right img', {
        duration: 2,
        scale: 1.08,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1')