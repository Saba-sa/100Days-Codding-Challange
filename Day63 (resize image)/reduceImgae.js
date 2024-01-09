const uploadBox = document.querySelector('.upload-box'),
    fileInput = uploadBox.querySelector('input'),
    previewImg = uploadBox.querySelector('img'),
    widthInput = document.querySelector('.width input'),
    heightInput = document.querySelector('.height input')
rationInput = document.querySelector('.ratio input'),
    downloadBtn = document.querySelector('.download-btn')
    qualityinput = document.querySelector('.quality input')
    ;

let orignalImageRation;

const loadFile = (e) => {
    const file = e.target.files[0];//getting first user selected file
    if (!file) return;
    previewImg.src = URL.createObjectURL(file)
    previewImg.addEventListener('load', () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        orignalImageRation = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector('.wrapper').classList.add('active')
    })
}
widthInput.addEventListener('keyup', () => {
    const height = rationInput.checked ? widthInput.value / orignalImageRation : heightInput.value;
    heightInput.value = Math.floor(height);
})


heightInput.addEventListener('keyup', () => {
    const width = rationInput.checked ? heightInput.value * orignalImageRation : widthInput.value;
    widthInput.value = Math.floor(width);
})
const resizeAndDownload=()=> {
const canvas=document.createElement('canvas')
const a=document.createElement('a')
const ctx=canvas.getContext('2d')
//1.0 is 100% quality where 0.7 is 70%  of total we can padd from 0-1-1.0
const imageQuality=qualityinput.checked?0.7:1.0;

canvas.width=widthInput.value;
canvas.height=heightInput.value;

ctx.drawImage(previewImg,0,0,canvas.width,canvas.height)
a.href=canvas.toDataURL('image/jpeg',imageQuality)
a.download=new Date().getTime();
a.click();

}


downloadBtn.addEventListener('click', resizeAndDownload);


fileInput.addEventListener('change', loadFile)
uploadBox.addEventListener('click', () => fileInput.click())


