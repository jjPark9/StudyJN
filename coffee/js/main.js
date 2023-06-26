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
  console.log(window.scrollY);
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