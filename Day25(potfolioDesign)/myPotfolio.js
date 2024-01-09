var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents')
function openTab(tabName){
for(tablink of tablinks){
tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabName).classList.add("active-tab");
}
let bar=document.querySelector(".bar")
let cross=document.querySelector(".cross")
bar.addEventListener('click',()=>{
    document.querySelector('#sidemenu').style.right= "0px";
})
cross.addEventListener('click',()=>{
    document.querySelector('#sidemenu').style.right= "-200px";
})
