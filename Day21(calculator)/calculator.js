// for color change
let themeMover=document.querySelector('.div3');

console.log(themeMover);
themeMover.addEventListener('click',()=>{
    themeMover.classList.toggle('move')
    document.body.classList.toggle('dark')
})
// for calculator
//selecting items
let clear=document.querySelector('.clear'),
operators=document.querySelectorAll('.operator'),
numbers=document.querySelectorAll('.number'),
equal=document.querySelector('.equal'),
text=document.querySelector('#result'),
btn=document.querySelector('button');

//event listners
clear.addEventListener('click',reset)

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>performOperation(operator.textContent))
})

numbers.forEach((numb)=>{
    numb.addEventListener('click',()=>addNumber(numb.textContent))
})
equal.addEventListener('click',calculate)
//funtions
//funtions for reset
function reset(){
    text.value=''
}

//funtions for operator value
function performOperation(opt){
text.value +=opt
}

//funtions for number value
function addNumber(num){
    text.value+=num
    
}
//funtion for calculation
function calculate(){
    try {
        text.value=eval(text.value)
    } catch (error) {
        text.value=`invalid`
setTimeout(() => {
    reset()
    
}, 1000);    
}
}
// for theme changer
let theme=document.querySelector('.theme-change-container')
theme.addEventListener('click',()=>{
    if(document.body.classList.contains('dark')){
document.querySelector(':root').style.setProperty('--light','black')
document.querySelector(':root').style.setProperty('--dark','white')
document.querySelector(':root').style.setProperty('--boxshadow1','rgba(216, 210, 210, 0.712)')
document.querySelector(':root').style.setProperty('--boxshadow2','rgba(231, 220, 220, 0.589)')
document.querySelector(':root').style.setProperty('--lightcolorkind','dark')
}
else{
document.querySelector(':root').style.setProperty('--light','white')
document.querySelector(':root').style.setProperty('--dark','black')
document.querySelector(':root').style.setProperty('--boxshadow1','rgba(128, 128, 128, 0.712)')
document.querySelector(':root').style.setProperty('--boxshadow2','rgb(0, 0, 0,0.3)')
document.querySelector(':root').style.setProperty('--lightcolorkind','rgb(246, 252, 252);')
}
})






