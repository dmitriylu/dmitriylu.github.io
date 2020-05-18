const allButtons = document.querySelectorAll('.portfolio__button');
const allPhoto = document.querySelectorAll('.portfolio__item');


function filters(arrBtn,arrPhoto) {
   
    let lastClick = arrBtn[0];
    arrBtn.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            lastClick.classList.remove('active');
            elem.classList.add('active');
            lastClick = elem;
            let BtnCategory = elem.dataset.filter; 
            if(BtnCategory == 'all') {
                arrPhoto.forEach(item => {
                    item.classList.remove('hide');
                }) 
            }else{
                arrPhoto.forEach(item => {
                    let itemCategory = item.dataset.cat;
                    if(itemCategory !== BtnCategory) {
                        item.classList.add('hide');
                    }else {
                       item.classList.remove('hide');
                    }
                })    
            }        
        })
    });
    
}
filters(allButtons,allPhoto);