// gsap.to(".text p",{
// color:"pink",
// duration:12
// });
let t1=gsap.timeline();
t1.from(".nav2 .nav h5",{
y:-80,
duration:2,
delay:1
}).from(".centernav h6",{
y:80,
duration:1
}).from(".text p",{
    opacity:0,
    scale:1.3,
duration:1
}).from(".text .btn",{
    opacity:0,
    scale:1.3,
duration:2
}).from(".page1 .images img:nth-child(1),.page1 .images img:nth-child(2)",{
    x:-900,
    duration:1,
    scale:1.6,
}).from(".page1 .images img:nth-child(3),.page1 .images img:nth-child(4)",{
    x:800,
    duration:2,
    delay:"-1",
    scale:1.6,
}).from(".arrow",{
    opacity:0,
    y:20,
    duration:2,
    yoyo:"true",
    repeat:-1,
})