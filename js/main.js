// бургер меню
document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            burgerBtn.classList.toggle('active');
        });
    }
});
