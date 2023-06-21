gsap.to('.stage', { autoAlpha: 1 });

const split = new SplitText('h1', { type: 'chars' });

const tl = gsap.timeline();

const y = gsap.utils.wrap([100, -100]);
const c = gsap.utils.wrap(['red', 'blue']);

tl.from(split.chars, {
  y,
  opacity: 0,
  stagger: {
    each: 0.02,
    from: 'random',
  },
}).to(split.chars, {
  x: 10,
  y: gsap.utils.wrap([0, 200, 0, 200, 200, 0]),
  color: c,
  stager: {
    each: 0.02,
  },
});

GSDevTools.create();
