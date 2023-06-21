gsap.from('.stage', { autoAlpha: 0 });

gsap.registerEffect({
  name: 'text3D',
  extendTimeline: true,
  defaults: {
    deg: 360,
  },
  effect: (target, config) => {
    const { chars } = new SplitText(target, { type: 'chars' });
    gsap.set(chars, { transformPerspective: 400 });

    const tl = gsap.timeline();

    tl.to(chars, {
      duration: 1.2,
      rotationY: config.deg,
      ease: 'back(3)',
      stagger: {
        amount: 1,
      },
    });
  },
});

const animation = gsap.timeline();
animation.text3D('h1');

GSDevTools.create();
