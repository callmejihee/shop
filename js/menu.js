let menu = document.querySelector('.nav__wrap');
let subShop = document.querySelector('.sub__shop');
let subInfo = document.querySelector('.sub__info');
let headerWrap = document.querySelector('.header__wrap');

let menuHeight = menu.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY >= 31) {
    menu.classList.add('fixed');
    subShop.classList.add('height');
    subInfo.classList.add('height');
  } else {
    menu.classList.remove('fixed');
    subShop.classList.remove('height');
    subInfo.classList.remove('height');
  }
});

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY >= 998) {
    headerWrap.classList.add('font_bk');
  } else {
    headerWrap.classList.remove('font_bk');
  }
});
