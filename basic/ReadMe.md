# GSAP

GSAP(GreenSock Animation Platform)의 약자이다.

gsap는 객체이다.

> javascript 이기 때문에 당연한 듯

크로스브라우징을 지원한다.

gsap 객체는 보호되지 않는다.

> gsap 객체나 내부 property에 뭔가를 할당하지 않도록 주의하자

TweenLight, TweenMax, TimelineLite, TimelineMax 는 옛날버전
현재는 gsap으로 통합되었다.

> 동작하지 않는 것은 아니지만... 3버전 이상을 사용하자

gsap엔진을 이용해서 제어할 수 있는 속성

- create animations
- configure settings
- register plugins, eases, and effects
- global control over all animations

Tweens와 Timelines 두 가지 를 배우는건 중점으로

Tweens
모든 애니메이션이 동작하는 역할을 말하며, 대상에게 duration, animation-properties 정보를 입력하는 하나의 단위로 해석

gsap.to()

```javascript
// TARGET: element
// CONFIG: 좌표 혹은 설정값 (ex: duration)
gsap.to([TARGET], [CONFIG]);
```

stagger
딜레이 기능

Timeline
애니메이션이 끝나는 시점에서 다음 애니메이션을 동작하기 위한 기능

> 시퀀스 애니메이션
