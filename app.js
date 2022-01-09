const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.navToggle');
const navClose = document.querySelector('.navClose');

navToggle.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(20px)';
})
navClose.addEventListener('click',()=>{
    navMenu.style.transform = 'translateX(500px)';
})