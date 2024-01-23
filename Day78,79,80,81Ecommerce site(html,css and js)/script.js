let banners = [
  "/images/banner/electronics-banner-1.jpg",
  "/images/banner/electronics-banner-2.jpg",
  "/images/banner/womens-banner.jpg",
  "/images/banner/mens-banner.jpg",
];
let links = ["#", "#", "#", "#"];
let banner = document.querySelector(".banner");
let count = 0;
let trans = -900;

// function scroll(){
//     if(count!=4){
//         display(count)
//         let bannerImg=document.querySelector('.banner img');
//         bannerImg.style.transition=`all 0.9s`;
//         bannerImg.style.transform=`translateX(${trans})`;
//     }
//     else{
//         count=0;
//     }

// }
// function display(i){
//     let j=1;
//     let k=2;
//     if(i==1){
//         j=2;k=3;
//     }
//     if(i==2){
//         j=3;k=0;
//     }
//     if(i==3){
//     j=0;k=1;
// }
//     banner.innerHTML=`
//     <a href=${links[i]}><img src="${banners[i]}" alt="" onClick="stop()"></a>
//     <a href=${links[j]}><img src="${banners[j]}" alt="" onClick="stop()"></a>
//     <a href=${links[k]}><img src="${banners[k]}" alt="" onClick="stop()"></a>`
// count++;
// }
// let u=setInterval(() => {
//     scroll()
// }, 2000);

// banner.addEventListener('click',()=>{
//     clearInterval(u)
// })
// function stop(){
//     clearInterval(u)

// }

let hamburger = document.querySelector(".bar");
let navi = document.querySelector(".navbar_hide");
hamburger.addEventListener("click", () => {
  navi.classList.toggle("navhide");
});

document.addEventListener("resize", () => {
  console.log("hh");
  if (window.innerWidth > 720) {
    navi.classList.add("navhide");
  }
});

let link = document.querySelectorAll(".navbar li a");
link.forEach((i) => {
  i.addEventListener("click", () => {
    link.forEach((k) => {
      k.classList.remove("active");
    });
    i.classList.add("active");
  });
});


const addTocart=(id,products,name)=>{
const temp=products.map((i)=>{
if(i.id===id){
   return {...i,addToCart:!(i.addToCart)}
}
    else{
        return i;
    } 
})
localStorage.setItem(name,JSON.stringify(temp))
}


let data = [
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-3.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-4.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-3.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-4.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-5.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-6.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jewellery-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jewellery-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jewellery-3.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/party-wear-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/party-wear-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shirt-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shirt-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/watch-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/watch-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/watch-3.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/watch-4.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-1.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-2.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-3.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-4.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-5.jpg",
  },
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-6.jpg",
  },
];
let featuredProducts = [
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/watch-2.jpg",
  },
  {
    id: 2,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shorts-1.jpg",
  },
  {
    id: 3,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/party-wear-1.jpg",
  },
  {
    id: 4,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-1.jpg",
  },
  {
    id: 5,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shoe-5.jpg",
  },
  {
    id: 6,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-2.jpg",
  }
];
let newArrival = [
  {
    id: 1,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/clothes-2.jpg",
  },
  {
    id: 2,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-1.jpg",
  },
  {
    id: 3,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-4.jpg",
  },
  {
    id: 4,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jacket-6.jpg",
  },
  {
    id: 5,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jewellery-1.jpg",
  },
  {
    id: 6,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/jewellery-3.jpg",
  },
  {
    id: 8,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/party-wear-1.jpg",
  },
  {
    id: 7,
    brandName: "ABC DEF",
    category: "shirt",
    price: 12,
    addToCart: false,
    image: "./images/products/shirt-1.jpg",
  },
];

let features_row = document.querySelector(".featured_products .row .items");
let temp=JSON.parse(localStorage.getItem('featured_products'));
if(temp) featuredProducts=temp;
features_row.innerHTML=featuredProducts.map(i=>{
    const {id,brandName,category,price,addToCart,image}=i;
    return `<div class="item">
    <div class="item_img">
        <img src=${image} alt="product">
    </div>
    <div class="item_detail">
        <p>${brandName}</p>
        <h4>${category}</h4>
        <span>Starts</span>
        <div class="item_detail_details">
            <h1>${price}</h1>
            <h1 onClick="addTocart( ${id},featuredProducts,"featured_Products")"><i class="fa-solid fa-cart-shopping"></i></h1>
            </div>
            </div>
            </div>`;
        }).join(" ")
        // <h1 onClick="addTocart( ${id},featuredProducts)"><i class="fa-solid fa-trash d-none"></i></h1>


let new_Arrival=document.querySelector('.new_arival .row .items')
new_Arrival.innerHTML=newArrival.map(i=>{
    const {id,brandName,category,price,addToCart,image}=i;
    return `<div class="item">
    <div class="item_img">
        <img src=${image} alt="product">
    </div>
    <div class="item_detail">
        <p>${brandName}</p>
        <h4>${category}</h4>
        <span>Starts</span>
        <div class="item_detail_details">
            <h1>${price}</h1>
            <h1 onClick="addTocart( ${id},newArrival,"newArrival")"><i class="fa-solid fa-cart-shopping"></i></h1>
            </div>
            </div>
            </div>`;
        }).join(" ")