let burger = document.querySelector('.header-hanburger');
let close = document.querySelector('.nav-close');

burger.addEventListener('click', burgerClick);
close.addEventListener('click', closeClick);

function burgerClick() {
    let mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.add('open');

    if (mobileNav.classList.contains('open')) {
        mobileNav.style.height += '100vh';
    }
}

function closeClick() {
    let mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('open');

    if (!mobileNav.classList.contains('open')) {
        mobileNav.removeAttribute('style')
    }

}