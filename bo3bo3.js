
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');

};




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-7.2rem";
    }
    prevScrollpos = currentScrollPos;
}
// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//     header.classList.add('sticky');

//     } else {
//     header.classList.remove('sticky'); }
// });