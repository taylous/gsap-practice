/**
 * ease(가속도)에 따라,
 * 값이 분배되는 속도가 달라진다.
 */
const dValue = gsap.utils.distribute({
  base: 0,
  amount: 500,
  ease: 'power3',
  from: 'center',
});

/**
 * 분배된 값을 어떻게 보여줄 것인지
 */
gsap.to('.bar', {
  height: dValue,
  duration: 2,
  stagger: {
    each: 0.1,
    // ease: 'power3.inOut',
    from: 'center',
  },
});

GSDevTools.create();
