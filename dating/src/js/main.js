

const burger = document.querySelector('.burger'),
nav = document.querySelector('.menu'),
navItem = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', (e) => {    
    nav.classList.toggle('show');
    burger.classList.toggle('toggle');
    document.querySelector('body').classList.toggle('lock');
    navItem.forEach(function(item) {
        item.addEventListener('click',() => {
            nav.classList.remove('show');
            burger.classList.remove('toggle');
        })
    })
    return burger;
});