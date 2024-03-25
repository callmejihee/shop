let logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 998) {
        logo.classList.add('logo_bk');
    } else {
        logo.classList.remove('logo_bk');
    }
})