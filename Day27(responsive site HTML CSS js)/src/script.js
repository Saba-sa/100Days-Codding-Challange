let bar=document.querySelector('.fa-bars');
let cross=document.querySelector('.fa-xmark');
bar.addEventListener('click',()=>{
    document.querySelector('.left-nav').style.height='390px';
})
cross.addEventListener('click',()=>{
    document.querySelector('.left-nav').style.height='0px';
})
// gsap animation
let nav=document.querySelector(".d-show");
let logo=document.querySelector(".hero_navigation_logo p");
let t1=gsap.timeline();

t1.from(logo, { x: -200 },0.1)
t1.from(nav, { y: -200 ,
duration: 1
    })