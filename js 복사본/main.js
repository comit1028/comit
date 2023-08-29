const btnNavEl = document.querySelector('.btn-mobile-nav');
const mainNav = document.querySelector('.main-nav');
const x = document.querySelector(".icon-mobile-nav[name='close-outline']");
const o = document.querySelector(".icon-mobile-nav[name='menu-outline']");

btnNavEl.addEventListener('click', function () {
  if (mainNav.style.display === 'block') {
    mainNav.style.display = 'none';
    x.style.display = 'none';
    o.style.display = 'block';
  } else {
    mainNav.style.display = 'block';
    x.style.display = 'block';
    o.style.display = 'none';
  }
});
