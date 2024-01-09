let headerIcon=document.querySelector('.iconBar')
let headerMenu=document.querySelector('.nav-links')
let closingMenu=document.querySelector('.icon')
headerIcon.addEventListener('click',()=>{
headerIcon.style.display='none'
headerMenu.style.right='0px';
closingMenu.style.display='block'
closingMenu.style.right='2px'
})
closingMenu.addEventListener('click',()=>{
    headerMenu.style.right='-200px';
    headerIcon.style.display='block'
})