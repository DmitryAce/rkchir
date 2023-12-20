window.addEventListener('scroll', e => {
    Object.assign(document.documentElement, {
        style: `--scrollTop: ${this.scrollY}px`
    });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper:'.wrapper',
    content: '.wrapper__container'
})