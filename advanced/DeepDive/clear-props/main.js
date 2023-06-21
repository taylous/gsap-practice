const $ = (node) => document.querySelector(node);

// const boxes = document.querySelectorAll('.box');
const boxes = gsap.utils.toArray('.box');

boxes.forEach((box) => {
  box.addEventListener('click', function () {
    gsap.to(this, { backgroundColor: 'gray', width: '300px' });
  });
});

$('#reset').addEventListener('click', () => {
  gsap.set('.box', { clearProps: 'all' });
});
