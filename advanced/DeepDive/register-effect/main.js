gsap.registerPlugin(GSDevTools, SplitText);

gsap.set('.stage', { autoAlpha: 1 });

gsap.registerEffect({
  name: 'textEffect',
  extendTimeline: true,
  defaults: {
    y: -100,
    colors: ['#fff', '#0689d8'],
  },
  effect: (target, config) => {
    const { chars } = new SplitText(target, { type: 'chars' });

    const tl = gsap.timeline();
    tl.from(chars, { y: config.y, opacity: 0, stagger: 0.05 }).to(chars, {
      color: gsap.utils.wrap(config.colors),
    });
  },
});

const animation = gsap.timeline();
animation.textEffect('h1');
animation.textEffect('h2', { colors: ['#fff', '#0057b8'] });
