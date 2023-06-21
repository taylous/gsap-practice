const $ = (node) => document.querySelector(node);

gsap.to('svg', { autoAlpha: 1 });

const time = $('#time');
const animation = gsap.timeline();

const pixelPerSecond = 200;

animation
  .to('#star', { duration: 1, x: 1150 })
  .to('#circle', { duration: 2, x: 1150 })
  .to('#square', { duration: 1, x: 1150 });

const childrens = animation.getChildren();

childrens.forEach((children, index) => {
  gsap.set(`#tween${index}`, { x: children.startTime() * pixelPerSecond });
  gsap.set(`#rect${index}`, { width: children.duration() * pixelPerSecond });
});

const maxX = animation.duration() * pixelPerSecond;

const handleMoveHead = () => {
  time.textContent = animation.time().toFixed(1);

  gsap.set('#playhead', { x: animation.progress() * maxX });
};
animation.eventCallback('onUpdate', handleMoveHead);

const dragger = Draggable.create('#playhead', {
  type: 'x',
  cursor: 'grab',
  trigger: '#timeline',
  bounds: {
    minX: 0,
    maxX: maxX,
  },
  onDrag(event) {
    animation.pause();
    animation.progress(this.x / maxX);
  },
});

$('#play').addEventListener('click', () => animation.play());
$('#pause').addEventListener('click', () => animation.pause());
$('#reverse').addEventListener('click', () => animation.reverse());
