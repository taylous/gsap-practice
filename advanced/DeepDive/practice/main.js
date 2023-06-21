gsap.set('.bg > div', { xPercent: -10, opacity: 0 });

gsap.registerEffect({
  name: 'textEffect',
  extendTimeline: true,
  defaults: {
    y: 30,
    opacity: 0,
  },
  effect: (target, { y, opacity }) => {
    const { chars } = new SplitText(target, { type: 'chars' });
    const { index } = target[0].dataset;
    const bgTarget = `.bg > div:nth-child(${index})`;

    const tl = gsap.timeline();
    tl.from(chars, { y, opacity, stagger: 0.1 })
      .to(bgTarget, { xPercent: 0, opacity: 1 }, 0)
      .to(chars, {
        delay: 1,
        opacity,
        stagger: 0.03,
      })
      .to(bgTarget, { xPercent: 10, opacity: 0 }, '<');
    return tl;
  },
});

const textAnimation = () => {
  const animation = gsap.timeline();

  animation
    .textEffect('.ex1')
    .textEffect('.ex2')
    .textEffect('.ex3')
    .textEffect('.ex4');

  animation.eventCallback('onUpdate', () => {
    if (animation.progress() === 1) {
      animation.restart();
    }
  });
};

textAnimation();
