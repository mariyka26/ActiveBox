// let user = {
//     name: 'Bob',
//     age: 23
// }
// console.log(user);

var swiper = new Swiper(".swiper_container", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header_navbar').classList.toggle('open');
});