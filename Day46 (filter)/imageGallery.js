let lists=document.querySelectorAll('.list')
let itemBoxes=document.querySelectorAll('.itemBox')
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click',function(){
        for (let j = 0; j < lists.length; j++) {
            lists[j].classList.remove('active')
        }
        this.classList.add('active')

let dataFilter=this.getAttribute('data-filter');
for(let k=0;k<itemBoxes.length;k++){
    itemBoxes[k].classList.remove('active');
    itemBoxes[k].classList.add('hide');
    if(itemBoxes[k].getAttribute('data-item')==dataFilter|| dataFilter=='All'){
        itemBoxes[k].classList.remove('hide');
        itemBoxes[k].classList.add('active');

    }
}

})    
}
itemBoxes.forEach((item)=>{
item.addEventListener('click',()=>{
    item.style.transform='Scale(3)';
    item.style.zIndex='2';
    item.addEventListener('dblclick',()=>{
        item.style.transform='Scale(1)';
        item.style.zIndex='1';
})
})
})
