// for upload
let textBox=document.getElementById("textBox")
let imgBox=document.getElementById("imgBox")
let cross=document.querySelector('.crose')
let upload_Icon=document.querySelector('.upload_Icon')

cross.style.display='none';

textBox.onkeyup=function(){
    document.getElementById("prevtext").innerHTML=this.value;
}
var loadFile=function(event){
    console.log("/ee",event);
    imgBox.style.backgroundImage="url("+URL.createObjectURL(event.target.files[0])+")";
    upload_Icon.style.display='none';
    cross.style.display='inline';
}
let h1=document.querySelector("h1")
h1.addEventListener('click',()=>{
    imgBox.style.background="#222"
})
function reset(){
    upload_Icon.style.display='inline';
    cross.style.display='none';
    imgBox.style.backgroundImage="none";
}

