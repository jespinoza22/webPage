// const ipad = window.matchMedia('screen and (max-width: 767px)');

const menu = document.querySelector('.menu');
const option = document.querySelectorAll('.link');
const burgerButton = document.querySelector('#burger-menu');

// ipad.addListener(validation);
burgerButton.addEventListener('click', hideShow);

option.forEach(element => {
    element.addEventListener('click', function() {
        menu.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
    });
});

// validation(ipad);

function hideShow(){
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
        burgerButton.classList.remove('is-active');
    }else {
        menu.classList.add('is-active');
        burgerButton.classList.add('is-active');
    }
}
