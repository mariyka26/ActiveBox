var swiper = new Swiper(".swiper_container", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.header_navbar');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', function () {
    this.classList.toggle('active');
    navbar.classList.toggle('open');

    // Блокируем/разблокируем скролл
    if (navbar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Закрываем бургер при клике на пункт меню
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navbar.classList.remove('open');
        document.body.style.overflow = '';
    });
});
