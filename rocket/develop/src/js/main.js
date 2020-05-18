

function smoothScroll() {
    const anchors = document.querySelectorAll('a.scroll-to');
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}
smoothScroll();


function hideScrollTop() {
    const scrollTop = document.querySelector('.top');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset < 399) {
            scrollTop.style.opacity = 0;
            scrollTop.style.transition = 'ease 1s';
        } else if (window.pageYOffset >= 400) {
            scrollTop.style.opacity = 1;
            scrollTop.style.transition = 'ease 0.5s';
        }
    })
}

hideScrollTop();


const burger = document.querySelector('.burger'),
nav = document.querySelector('nav'),
navItem = document.querySelectorAll('.menu__item');

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