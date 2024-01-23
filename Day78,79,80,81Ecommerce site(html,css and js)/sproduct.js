let mainImg=document.querySelector('#mainImage');
let smallImgs=document.querySelectorAll('.smallImage');
smallImgs.forEach(i=>{
    i.addEventListener('click',()=>{
        mainImg.src=`${i.src}`
    })
})
