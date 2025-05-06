let element = document.querySelector('.popup');
let body = document.querySelector('body');

document.querySelector('.banner__btn').addEventListener('click', ()=>{
    element.classList.add('goanime')
    body.style.overflow = 'hidden';
    window.scrollTo(0,0);
})

document.querySelector('.popup__close').addEventListener('click', ()=>{
    element.classList.remove('goanime')
    element.classList.add('closeanime')
    setTimeout( ()=> {
        element.classList.remove('closeanime')
    }, 1000)
    body.style.overflow = 'auto';
})