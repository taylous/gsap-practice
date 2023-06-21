// const custom = (index, target, arr) => {
//   if (target.classList.contains('orange')) {
//     return 0;
//   }
//   return (index + 1) * 30;
// };

// gsap.to('.box', {
//   x: custom,
//   y: custom,
//   rotation: custom,
//   stagger: 0.1,
// });

gsap.to('.blue, .pink', {
  rotation: (index, target, arr) => {
    const isBlue = target.classList.contains('blue');
    return 360 * (isBlue ? 1 : -1);
  },
  repeat: -1,
  duration: 2,
  ease: 'none',
});
