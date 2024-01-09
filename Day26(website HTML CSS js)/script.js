let overlay=document.querySelector('.overlay')
let navbar=document.querySelector('nav ul')
let close_menu=document.querySelector('.fa-x')
let open_menu=document.querySelector('.fa-bars')
function menuToggle(){
    navbar.classList.toggle('show')
    overlay.classList.toggle('hide')
    close_menu.classList.toggle('hide')
    open_menu.classList.toggle('hide')
    console.log('close_menu',close_menu)
}
// function menuToggle(){
//     navbar.classList.toggle('show')
//     overlay.classList.toggle('hide')
// }