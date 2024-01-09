function animi(){
anime({
    targets: '.rtopLeft-behind',
    translateX: -400,
    direction: 'reverse',
    easing: 'easeInOutExpo',
    delay:900,
    autoplay:true,
    duration:1000
});


  anime({
    targets: '.rtopLeft-front',
    translateX: 400,
    direction: 'reverse',
    easing: 'easeInOutExpo',
    delay:900,
    autoplay:true,
    duration:1000
  });
}
  let text=[
    {
        behind:"Design",
        front:"Nerd"
    },
    {
        behind:"Mixture",
        front:"Minitize"
    },
    {
        behind:"Beauty",
        front:"Screts"
    },
  ]
  let front=document.querySelector('.rtopLeft-front')
  let behind=document.querySelector('.rtopLeft-behind')
display(front);
display(behind);


function display(item){
  let i=0;
  const interval = setInterval(() => {
    if (i < text.length) {
      if(item==behind){ 
      item.innerHTML = text[i].front;
      // animi()
    }
    else{
      item.innerHTML = text[i].behind;
      animi()
      }
      i++;
    } else {
      // clearInterval(interval);
      i=0;
    }
  }, 2000);
}

let image = document.querySelector('.changeImage');
let RtopLeft = document.querySelector('.rtopRight');

function fadeIn(element, duration) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 1;
}

function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 0;
}

RtopLeft.addEventListener('mouseover', () => {
  fadeOut(image, 250);
  setTimeout(() => {
    image.setAttribute('src', './images/orange1nobg.png');
    fadeIn(image, 250);
  }, 250); // Wait for fade-out transition to complete (250ms)
});

RtopLeft.addEventListener('mouseout', () => {
  fadeOut(image, 250);
  setTimeout(() => {
    image.setAttribute('src', './images/orange.png');
    fadeIn(image, 250);
  }, 250); // Wait for fade-out transition to complete (250ms)
});


const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

