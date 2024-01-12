let h2=document.querySelector('h2')
let h3=document.querySelector('h3')
let h4=document.querySelector('h4')
let inp=document.querySelector('#guess')
 let sub=document.querySelector('#sub')
let guess=document.querySelector('h3')
let win=document.querySelector('.win')
let con=document.querySelector('.container')
let img=document.querySelector('.images')

let obj=[
    {
        word:'Pizza',
        hint:'fastFood',
        url:'url(menu-1.jpg)'
    },{
        word:'Paratha',
        hint:'everyone loves',
        url:'url(menu-3.jpg)'
    }
    ,{
        word:'Chochlate',
        hint:'Girls love mostly',
        url:'url(menu-4.jpg)'
    }
    ,{
        word:'sandwitch',
        hint:'fastfood',
        url:'url(menu-5.jpg)'
    }
    ,{
        word:'Ice Cream',
        hint:'i\'m mostley eaten in winters',
        url:'url(menu-6.jpg)'
    }
    ,{
        word:'Juice',
        hint:'I\'m a drink',
        url:'url(menu-7.jpg)'
    }
    ,{
        word:'Juice',
        hint:'fruite I\'m king of fruits',
        url:'url(menu-8.jpg)'
    }
    ,{
        word:'Rice',
        hint:'fruite I\'m eateb by alot of peoples',
        url:'url(menu-8.jpg)'
    }
]
let guessTimes=0;
var RandWord=randomNo();
function randomNo(){
    let rand=Math.floor(Math.random()*8)
    return rand;
}
sub.addEventListener('click',random)
function random(){
    if(inp.value!=''){
        guessTimes++;
        h4.innerText='guesses:'+guessTimes;
        h3.innerText=`You guessed ${guessTimes} times`;
        randImage()
    }
    else{
        alert('empty!!! :( try to guess man')
    }
}
img.style.backgroundImage=`${obj[RandWord].url}` ;
function randImage(){
    if(obj[RandWord].word.toLowerCase()!=inp.value.trim().toLowerCase()){
        if(guessTimes>2){
            h2.innerText=`Hint:${obj[RandWord].hint}`;
        }
    }
    else{
        inp.value=' '
        guessTimes=0;
        h4.innerText='guesses:'+guessTimes;
        con.style.display='none'
        win.style.display='block'
        console.log(guessTimes);
        setTimeout(() => {
            con.style.display='block'
            win.style.display='none'
            RandWord=randomNo()
            img.style.backgroundImage=`${obj[RandWord].url}` ;
            h2.innerText='';
            h3.innerText=`You guessed ${guessTimes} times`;
        }, 5000);
    }
}

function reset(){
    guessTimes=0;
    h4.innerText='guesses:'+guessTimes;
inp.value=''
}


