// .search 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

// input 요소에 포커스되면 실행 (클릭 외 방법으로 포커스될 수 있기 때문)
searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });
  }
});

// fade-in 요소
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  // 1초동안 전환 효과
  gsap.to(fadeEl, 1, {
    // index + 1 값만큼 지연 -> 순차적 애니메이션
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// 슬라이드 기능
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal'
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
});
