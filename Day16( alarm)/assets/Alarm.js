let clock=document.querySelector('.clock')
let set=document.querySelector('.set')
let stop=document.querySelector('.stop')
let tone = document.getElementById("myAudio"); 
let list = document.querySelector(".listToShow ol"); 
let hour=document.querySelector('.hour')
let min=document.querySelector('.minute')
let flag=0;

function show(){
    let date=new Date;
    let hour=date.getHours()%12||12;
    let minute=date.getMinutes();
    let second=date.getSeconds();
    clock.innerHTML= `${hour}:${minute}:${second}`
}
setInterval(() => {
    show()
    if(hour.value !=='#' && min.value !=='#'){
        check(hour.value,min.value)
    }
}, 1000);
function setValue(){
    let hours=hour.value;
    let minutes=min.value;
    if(hours !=='#' && minutes !=='#'){
        list.innerHTML=`<li>Alarm is set at:${hours}:${minutes}</li>`;
        check(hours,minutes)
        flag=0; 
    }
    else{
        model()
    }
    }
    function check(hours,minutes){
        let date=new Date;
        let hour=date.getHours()%12||12;
        let minute=date.getMinutes();
        if(hours-hour==0){
            if(minute>=minutes-5 && minute!=minutes){
                list.innerHTML=`<li>Alarm is near bro ${hours}:${minutes}</li>`;
                tone.pause()
            }
            else if(minutes-minute==0){
                document.querySelector('img').src='./assets/images/giphy.gif'  
                list.innerHTML=`<li>Weak Up BRO</li>`;
                if(flag!==1){
                    playing()
                }
                else{
                    stopping()
                    document.querySelector('img').src='./assets/images/download.png'     
                }
             }else{
                    tone.pause()
                    document.querySelector('img').src='./assets/images/download.png'     
                }
            }
    }
    function playing(){
    tone.play();               
}
    function stopping(){
    tone.pause();
    flag=1;               
}
function model(){
    console.log('model');
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.modal').classList.add('open');
    let close=document.querySelector('.btn_close');
close.addEventListener('click',()=>{
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('open');
})
}