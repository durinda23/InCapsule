let element = document.querySelector('.popup');
let body = document.querySelector('body');

document.querySelector('.number__btn').addEventListener('click', ()=>{
    element.classList.add('goanime')
    body.style.overflow = 'hidden';
    body.style.setProperty('background-color', 'rgba(0,0,0,0.5)');
    window.scrollTo(0,0);
})

document.querySelector('.number__btn2').addEventListener('click', ()=>{
    element.classList.add('goanime')
    body.style.overflow = 'hidden';
    body.style.setProperty('background-color', 'rgba(0,0,0,0.5)');
    window.scrollTo(0,0);
})

document.querySelector('.popup__close').addEventListener('click', ()=>{
    element.classList.remove('goanime')
    element.classList.add('closeanime')
    document.body.style.removeProperty('background-color');
    setTimeout( ()=> {
        element.classList.remove('closeanime')
    }, 1000)
    body.style.overflow = 'auto';
})