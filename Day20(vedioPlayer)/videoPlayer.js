let video=document.querySelector('video')
, pla=document.querySelector('.play')
, pau=document.querySelector('.pause')
, swicth=document.querySelector('.switch');

pau.addEventListener('click',()=>{
    video.pause();
swicth.classList.add("right")

})

pla.addEventListener('click',()=>{
    video.play();
    swicth.classList.remove("right")

})
let preloader=document.querySelector('.pre-loader')
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader')
})