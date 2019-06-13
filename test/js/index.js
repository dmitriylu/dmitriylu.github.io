const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navItem = document.querySelectorAll('.menu__item');



burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('toggle');
});

navItem.forEach(function(item) {
    item.addEventListener('click',() => {
        nav.classList.remove('show');
        burger.classList.remove('toggle');
    })
   
})
