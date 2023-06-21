const $ = (node) => document.querySelector(node);
const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');

const update = () => {
  time.textContent = animation.time().toFixed(2);
  progress.value = animation.progress();
};

const setButtonState = () => {
  button.textContent = animation.paused() ? 'play' : 'pause';
};

const animation = gsap.to(tiger, {
  duration: 6,
  motionPath: {
    path: '#route',
    align: tiger,
  },
  onUpdate: update,
  onComplete: () => (button.textContent = 'play'),
});

/**
 * 애니메이션 상태를 반환하거나,
 * 정지시킬 수 있는 함수
 *
 * GETTER/SETTER 역할을 모두 함
 */
// animation.paused();

/**
 * 애니메이션 속도를 조절해줌
 *
 * GETTER/SETTER 역할을 모두 함
 */
// animation.timeScale();

/**
 * 재생시간을 설정하거나,
 * 현재 재생시간을 반환 받을 수 있다.
 *
 * 현재 duration = 6 으로 setting 되어있으므로,
 * 3을 넘겨주면 중간부터 시작함
 *
 * GETTER/SETTER 역할을 모두 함
 */
// animation.time(3);

/**
 * 애니메이션의 진행률이 출력된다.
 *
 * time과 유사한 동작방식
 *
 * GETTER/SETTER 역할을 모두 함
 */
// animation.progress();

button.addEventListener('click', () => {
  animation.paused(!animation.paused());

  if (animation.progress() === 1) {
    animation.restart();
  }
  setButtonState();
});

progress.addEventListener('input', (event) => {
  const target = event.target;
  animation.progress(target.value).pause();
  button.textContent = 'play';
});

// [TARGET]에 TWEEN 객체가 들어갈 수 있다.
// gsap.to(animation, { time: 3 });

const home = $('#home');
const mountain = $('#mountain');
const river = $('#river');
const company = $('#company');
const svg = $('svg');

svg.addEventListener('click', (event) => {
  const g = event.target.closest('g');

  if (g) {
    const id = g.getAttribute('id');

    if (id && id !== 'svg') {
      animation.pause();
      let progress = 0;

      switch (id) {
        case 'mountain':
          progress = 0.21;
          break;
        case 'river':
          progress = 0.47;
          break;
        case 'company':
          progress = 1;
          break;
        default:
          progress = 0;
      }
      gsap.to(animation, { progress, duration: 3 });
      setButtonState();
    }
  }
});

// home.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation, { progress: 0, duration: 3 });
// });

// mountain.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation, { progress: 0.21, duration: 3 });
// });

// river.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation, { progress: 0.47, duration: 3 });
// });

// company.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation, { progress: 1, duration: 3 });
// });
