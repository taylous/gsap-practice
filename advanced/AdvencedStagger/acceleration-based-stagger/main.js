gsap.to('.stage > div', {
  duration: 2,
  opacity: 0,
  ease: 'power3.inOut',
  stagger: {
    each: 0.2,
    ease: 'power3',
    from: 'center',
  },
});
