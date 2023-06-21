const tl = gsap.timeline();

const duration = 0.5;

gsap.set('.utils > div', {
  transformOrigin: '50% 50% -50',
});

tl.from('.utils > div', {
  rotationX: -90,
  opacity: 0,
  stagger: {
    each: duration,
  },
}).to(
  '.utils > div',
  {
    rotationX: 90,
    opacity: 0,
    stagger: {
      each: duration,
    },
  },
  duration
);

GSDevTools.create();
