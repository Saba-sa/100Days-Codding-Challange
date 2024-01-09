let det = document.querySelector('.detail'),
    overlay = document.querySelector('.overlay'),
    sectionCenter = document.querySelector(".section-center"),
    filterBtns = document.querySelector('.filter-btns');

const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "images/menu-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 2,
        title: "pizza",
        category: "lunch",
        price: 99,
        img: "images/menu-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 3,
        title: "buttermilk pancakes",
        category: "dinner",
        price: 15,
        img: "images/menu-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 4,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 1,
        img: "images/menu-4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 5,
        title: "buttermilk pancakes",
        category: "Lunch",
        price: 9,
        img: "images/menu-5.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 6,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 59,
        img: "images/menu-6.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 7,
        title: "buttermilk pancakes",
        category: "Dinner",
        price: 19,
        img: "images/menu-7.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    },
    {
        id: 8,
        title: "buttermilk pancakes",
        category: "Lunch",
        price: 50,
        img: "images/menu-8.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consectetur saepe odit corrupti perspiciatis. A enim quod dicta sit doloremque."
    }
];
window.addEventListener("load", () => {
    overlay.classList.add('open-modal')
    det.classList.remove('rem')
});
window.addEventListener("click", () => {
    overlay.classList.remove('open-modal')
    det.classList.add('rem')
})
window.addEventListener('DOMContentLoaded',()=>{
    reset()
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

// to filter the items

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `
    <article class="menu-item">
    <div class="menu-item-img">    
    <img src=${item.img} alt=${item.title} class="photo">
         </div> <div class="item-info">
    <header>
    
      <h4 class="name">${item.title}</h4>
      <h4 class="price">${item.price}</h4>
    </header>
    <p class="item">${item.desc}</p>    
    </div>
    </article>
    `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
const filterBtn = document.querySelectorAll('.filter-btn')
window.addEventListener('DOMContentLoaded', () => {
    diplayMenuItems(menu)
    const categories = menu.reduce(() => {

    }, ['All']
    )
})

filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category == category) {
                return menuItem;
            }
        });
        if (category == 'All') {
            diplayMenuItems(menu)
        }
        else {
            diplayMenuItems(menuCategory)
        }
    })
})
// to add new item
let image
    , nam = document.querySelector("#name")
    , category = document.querySelector("#category")
    , description = document.querySelector("#description")
    , view = document.querySelector(".view")
    , price = document.querySelector("#price")
    , formanuallyInput = document.querySelector(".formanuallyInput")
    , sh = document.querySelector(".show")
    , upload = document.querySelector(".upload")
    , images = document.querySelector("img")
    , countHt = document.querySelector(".counter");


function show() {
    formanuallyInput.classList.toggle('active')
    if (formanuallyInput.classList.contains('active')) {
        setTimeout(() => {
            sh.innerHTML = 'remove'
        }, 300);
    }
    else {
        setTimeout(() => {
            sh.innerHTML = 'add'
        }, 300);
    }
}

function reset() {
    nam.value = '';
    description.value = '';
    price.value = '';
    category.value = '';
    images.src = `./images/upload.png`
    upload.classList.remove('active')
}


const imageUrl = (e) => {
    const file = e.target.files[0];
    e.target.nextElementSibling.children[0].classList.add('active');
    if (!file) return;
    images.src = URL.createObjectURL(file)
    resizeAndDownload();
}

const resizeAndDownload = () => {
    const canvas = document.createElement('canvas')
    const a = document.createElement('a')
    const ctx = canvas.getContext('2d')

    canvas.width = 500;
    canvas.height = 375;

    ctx.drawImage(images, 0, 0, canvas.width, canvas.height)
    a.href = canvas.toDataURL('image/jpeg', 100)
    let url = a;
    return url;
    // a.download=new Date().getTime();
    // a.click();
}



function check() {
    let checker = (nam.value != '' && nam.value.trim().length > 2) && (price.value != ' ') && (description.value.trim().length > 100 && description.value.trim().length <= 150)
    if (checker) {
        perform()
        return reset()
        return;
    }
    else {
        document.querySelectorAll('input').forEach((inp) => {
            if (inp.value == '') {
                inp.style.transform = 'scale(1.06)'
                setTimeout(() => {
                    inp.style.transform = 'scale(1)'

                }, 900);
            }
        })
        if (description.value.trim() == '' || description.value.trim().length < 100) {
            description.style.transform = 'scale(1.06)'
            setTimeout(() => {
                description.style.transform = 'scale(1)'
                return;

            }, 900);
        }
    }
}

function perform() {
    menu.unshift(addnew());
    diplayMenuItems(menu);
}
function addnew() {
    return {
        id: menu.length + 1,
        title: `${nam.value}`,
        category: `${category.value}`,
        price: `${price.value}`,
        img: `${resizeAndDownload()}`,
        desc: `${description.value}`
    };
}
let counter=150;
let count=1;
let desLength=description.value.length;
if(desLength<counter){
    description.addEventListener('keydown',()=>{
    desLength=description.value.length;
    count=counter-desLength;
    countHt.innerHTML=count;
    if(count==0){
        countHt.innerHTML='';
}
})
}