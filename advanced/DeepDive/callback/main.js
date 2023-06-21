const $ = (node) => document.querySelector(node);

const h1 = $('h1');

// onComplete
// onUpdate
// onStart
// onRepeat

function complete(color) {
  console.log('complete', this);
  h1.textContent = `${color} 애니메이션 재생 끝`;
}

const update = () => {
  console.log('update');
};

const start = () => {
  console.log('start');
};

const repeat = () => {
  console.log('repeating...');
};

gsap.to('.orange', {
  y: 100,
  duration: 2.5,
  onComplete: complete,
  onCompleteParams: ['오렌지'],
  onUpdate: update,
  onStart: start,
  onRepeat: repeat,
});
