let playerTurn=document.querySelector('.player')
let winner=document.querySelector('.winner')
let container=document.querySelector('.container')
const Values=['X','O']
let playes=Values[0];
playerTurn.innerText=Values[1];
const col=document.querySelectorAll('.colomn');
col.forEach(item=>{
    item.addEventListener('click',()=>{
        if(item.innerHTML==''){
            if(playes=='X'){
                playes=Values[1];
                playerTurn.innerText=Values[0];
            }else{
                playes=Values[0];
                playerTurn.innerText=Values[1];
            }
            item.innerHTML=playes;
            check()

        }
        })
    })
const winningPatterns = {
pattern1: [0, 1, 2],
pattern2: [0, 3, 6],
pattern3: [0, 4, 8],
pattern4: [1, 4, 7],
pattern5: [2, 5, 8],
pattern6: [2, 4, 6],
pattern7: [3, 4, 5],
pattern8: [6, 7, 8]
};
const check=()=>{

    for(pat in winningPatterns){
console.log(winningPatterns[pat][0]);
if(col[winningPatterns[pat][0]].innerText != ''
&& col[winningPatterns[pat][1]].innerText !='' && col[winningPatterns[pat][2]].innerText!=''){
if(col[winningPatterns[pat][0]].innerText==col[winningPatterns[pat][1]].innerText && col[winningPatterns[pat][1]].innerText == col[winningPatterns[pat][2]].innerText){
winner.innerText=`${col[winningPatterns[pat][0]].innerText}`
col[winningPatterns[pat][0]].classList.add('line')
col[winningPatterns[pat][1]].classList.add('line')
col[winningPatterns[pat][2]].classList.add('line')
container.style.cursor='none';
col.forEach(i=>i.removeEventListener('click'))
}}
    }
        
}
function reset(){
col.forEach(i=>{
    i.innerText=''
    i.classList.remove('line')
    container.style.cursor='default';
})
}
