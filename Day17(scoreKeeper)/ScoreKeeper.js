const p1btn=document.querySelector('#p1Button')
const p2btn=document.querySelector('#p2Button')
let p1Score=document.querySelector('#player1')
let p2Score=document.querySelector('#player2')
let overlay=document.querySelector('.overlay')
let resBtn=document.querySelector('#reset');
const playto=document.querySelector('#playTo')
let player1=0;
let player2=0;
let winningScore=5;
let isgameOver=false;
p1btn.addEventListener('click',()=>{
    if(!isgameOver){
        player1++;
         if(player1===winningScore){
            isgameOver=true;
            p1Score.classList.add('winner')
            p2Score.classList.add('loser')
            overlay.classList.add('show');

        }
             p1Score.innerHTML=player1;}
})
p2btn.addEventListener('click',()=>{
    if(!isgameOver){
        player2++;
    if(player2===winningScore){
    isgameOver=true;
    p2Score.classList.add('winner')
    p1Score.classList.add('loser')
    overlay.classList.add('show');

    }
    p2Score.innerHTML=player2;

}})
playto.addEventListener('change',()=>{
 winningScore=parseInt(playto.value)
 reset()

})
resBtn.addEventListener('click',reset)
function reset(){
    isgameOver=false;
    player1=0;
    p1Score.innerHTML=player1;
    player2=0;
    p2Score.innerHTML=player2;
    p1Score.classList.remove('winner','loser')
    p2Score.classList.remove('winner','loser')
    overlay.classList.remove('show');
}