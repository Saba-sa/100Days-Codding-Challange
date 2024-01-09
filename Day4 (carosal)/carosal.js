const container=document.querySelector('.carosal-container');
const slides=document.querySelectorAll('.slide');

let offset=0;
let slideID=0;

setInterval(()=>{
    offset=slides[0].offsetWidth;
    container.style.transition="left ease-in-out 500ms";
    container.style.left=-offset+'px';
    setTimeout(() => {
       container.style.transition="none";
       slides[slideID].style.order=slides.length-1; 
       container.style.left=0;
       slideID++;
       if(slideID===slides.length){
        slideID=0;
        slides.forEach(slide => {
            slide.style.order="initial";
        });
       }
    }, 500);
},3000)