let input=document.querySelector('.user-text')
let cross=document.querySelector('.cross')
function change(event){
    document.querySelector(".user").style.background=`url("${URL.createObjectURL(event.target.files[0])}")`
    document.querySelector(".user").style.backgroundPosition='center'
    document.querySelector(".user").style.backgroundRepeat='no-repeat'
    document.querySelector(".user").style.backgroundSize='cover'
    input.style.display='none'
    cross.style.display='block'
}
function again(){
    document.querySelector(".user").style.background=`none`;
    document.querySelector(".user").style.backgroundColor ='rgb(184, 180, 180)';
    input.style.display='block'
    cross.style.display='none'
}


let sub=document.querySelectorAll('.btn')
// form validation
let Fname=document.querySelectorAll('.firstName');
let Lname=document.querySelectorAll('.lastName');
let email=document.querySelector('.email')
let phone=document.querySelectorAll('.phone')
let cnic=document.querySelectorAll('.CNIC')
//regex
let nameChecker=/^[A-Za-z. ]{3,15}$/;
 let passwordChecker=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-za-z0-9!@#$%^&* ]{8,16}$/;
 let emailCheck=/^[A-za-z0-9_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
let phonenoChecker=/^[03]{2}[0-9]{9}$/;
let cniccheck=/^[71404]{5}-[0-9+]{7}-[0-9]{1}$/
let valid = true;
sub.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        validation();
    } )
})

function validation(){
  checker(Fname,nameChecker)
    checker(Lname,nameChecker)
    checker(phone,phonenoChecker)
    singleCheck(email,emailCheck)
    imageChecker()
    return valid;
}

function validation1(){
    checker(cnic,cniccheck) 
    return valid;
}
function validation2(){
    let files=document.querySelectorAll("#cnic-Pic") 
    files.forEach((f)=>{
        let m=f.nextElementSibling;    
        if(f.files.length==0){
        m.innerHTML='plz select any pdf file '
        valid=false;
        return valid;
        }
        else{
            m.innerHTML=' '
            valid=true;
        }
        
    })
    return valid;
}
function validation3(){
let check=document.querySelector('#agree')
if(check.checked){
    Submission()
    if(check.classList.contains('new')){
        check.classList.remove('new')
    }
   valid=true;
   return valid;
}
else{
    console.log('else');
    check.classList.add('new')
    valid=false;
    return valid;
}
}
function checker(parentEle,check){
    parentEle.forEach((childEle)=>{
        if(check.test(childEle.value)){
            let msg=childEle.nextElementSibling;
            msg.innerHTML=''
            valid=true;
        }
        else if(childEle.value==''){
            let msg=childEle.nextElementSibling;
            msg.innerHTML='This field should not be empty '
            valid = false;
        }
        else{
            let msg=childEle.nextElementSibling;
            msg.innerHTML='This field is invalid '
            valid = false;
        }
    })
}
function singleCheck(childEle,check){
    if(check.test(childEle.value)){
        let msg=childEle.nextElementSibling;
        msg.innerHTML=''
        valid=true;
    }
    else if(childEle.value==''){
        let msg=childEle.nextElementSibling;
        msg.innerHTML='This field should not be empty '
        valid=false;
    }
    else{
        let msg=childEle.nextElementSibling;
        msg.innerHTML='This field is invalid '
        valid=false;
    }
}
function imageChecker(){
    let img=document.getElementById("UserPic") 
    let msg=document.querySelector(".us span") 
    if(img.files.length==0){
        msg.innerHTML='plz select an image '
        valid=false;
    }
    else{
        msg.innerHTML=' '
        valid=true;
    }
}

// for moving to next part
let navigation=document.querySelectorAll('.navigation')
let navigationChild=document.querySelectorAll('.form-class')

function activeInNavigation(n){
    navigation.forEach((navi)=>{
navi.classList.remove('active')
    })
  let u=navigation[n]
    u.classList.add('active');
}
    


let currentTab=0;

let x = document.getElementsByClassName("form-class");
function showTab(currentTab) {
    activeInNavigation(currentTab)
    x[currentTab].style.display = "block";
}
showTab(currentTab)

function nextPrev(n) {
    if (currentTab == 0 &&  validation()){
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;   
        showTab(currentTab);   
    }
    else if(currentTab==1 &&   validation1())
    {
        
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;   
        showTab(currentTab);   
    }
    
    else if(currentTab==2 &&  validation2()) {
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;   
        showTab(currentTab);   
    }
    else if (currentTab==3 && !validation3()){
      
    }
}
function Submission(){
    let btns=document.querySelectorAll('.formTopMost')
    btns.forEach((btn)=>{
        btn.submit();
    })
}  

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

let down=document.querySelector('.fa-caret-down')
let up=document.querySelector('.fa-caret-up')
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
      down.classList.toggle("hide");
      up.classList.toggle("hide");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// to open the nav
function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
    document.body.style.zIndex = "3";
  }


function closeNav() {
    document.querySelector(".sidenav").style.width = "0px";
    document.querySelector("main").style.marginLeft= "0px";
    document.body.style.backgroundColor = "white";
  }

