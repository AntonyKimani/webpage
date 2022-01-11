const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.navToggle');
const navClose = document.querySelector('.navClose');
const sideToggle = document.querySelector('.sideToggle');
const sideClose = document.querySelector('.sideClose');

navToggle.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(20px)';
})
navClose.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(500px)';
    navClose.style.transform = 'rotateX(180deg)';
})
sideToggle.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(0px)';
})
sideClose.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(-140px)';
})

