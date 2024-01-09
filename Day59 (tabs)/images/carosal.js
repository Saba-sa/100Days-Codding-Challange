let index=1;
let slider=document.getElementsByClassName('slider')
let dots=document.getElementsByClassName('dot')
showSlide(index)
function plus(n){
    showSlide(index+=n)
}
function showSlide(n){
    if(n>slider.length){
        index=slider.length
    }
    else if( n===0){
        index=1;
    }
    for(let i=0;i<slider.length;i++){
        slider[i].style.display='none'
    }
    for(let i=0;i<dots.length;i++){
        dots[i].classList.remove('active')
    }
  
    slider[index-1].style.display='block'
    dots[index-1].classList.add('active')
}