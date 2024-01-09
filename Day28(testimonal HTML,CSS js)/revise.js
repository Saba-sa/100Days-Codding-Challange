const reviews=[
    {
        id:1,
        name:'saba',
        job:'web developer',
        img:'user1.jpg',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:2,
        name:'aliya',
        job:'graphic designer' ,
        img:'user2.jpg',
        text:'dolor sit amet consectetur adipisicing Lorem ipsum  elit. Laborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:3,
        name:'Aliahba',
        job:'ui/ux developer' ,
        img:'user3.jpg',
        text:'Laborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:4,
        name:'reena',
        job:'App developer' ,
        img:'user4.jpg',
        text:'Laborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:5,
        name:'sophia',
        job:'App developer' ,
        img:'comments-1.jpg',
        text:'Laborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:6,
        name:'Ali',
        job:'Digitial Markiting' ,
        img:'comments-6.jpg',
        text:'voluptatibus quia dolores vaborum omnis enim dolor voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:7,
        name:'Jeia',
        job:'Content Writter' ,
        img:'comments-3.jpg',
        text:'Mibus quLaborum omnis enim dolor voluptatia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },
    {
        id:8,
        name:'Zoya',
        job:'Game developer' ,
        img:'comments-4.jpg',
        text:'voluptatibus quia dolores veritatis assumenda provident. Reiciendis adipisci eum Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta aperiam dicta deserunt praesentium blanditiis aliquid esse officia?' 
    },

]
let authorName=document.getElementById('author')
let authorImage=document.getElementById('personal-img')
let authorJob=document.getElementById('job')
let authorReview=document.getElementById('info')
let previous=document.querySelector('.prev-btn')
let next=document.querySelector('.next-btn')
let random=document.querySelector('.random-btn')
let count=0;
window.addEventListener('DOMContentLoaded',()=>{
    show(count)
})
previous.addEventListener('click',()=>{
    if(count>0){
        count--;
       show(count)
}
else{
        count=reviews.length-1;
        show(count)
    }
})
next.addEventListener('click',()=>{
    if(count<reviews.length-1)
    {   count++;
        show(count)
}
else{
    count=0;
    show(count)
}
})

    function show(count){
        let review=reviews[count]
    authorName.innerText=review.name
    authorJob.innerText=review.job
    authorImage.src=review.img
    authorReview.innerText=review.text
    }
random.addEventListener('click',()=>{
    let rand=Math.floor(Math.random()*reviews.length)
    show(rand)
})
let ok=document.querySelector('.ok')
ok.addEventListener('click',()=>{
   let pop=document.querySelector('.popup')
  pop.style.display='none'
})