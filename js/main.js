const content = document.querySelector('.content');
const usermenu = document.querySelector('.nav_list1-usermenu')

const img = 'https://picsum.photos/200/300'

usermenu.addEventListener('click', () => {
    location.href = '/page/admin.html'
})


const korzinka = document.querySelector('.nav_list1-menu2')

korzinka.addEventListener('click', () => {
    location.href = '/page/korzinka.html'
})

function getlocal() {
    return JSON.parse(localStorage.getItem('products'))
}

let product = getlocal()

window.addEventListener("DOMContentLoaded", () => {
    let display = product.map((item) => {
        return `
            <div class="item" data-id="${item.id}">
                <img class="item_saved" src="/img/Button.svg">
                <img class="fa-solid" src="/img/heart.jpg" alt="">
                <img class="item_img" src="${img}">
                <p class="item_price">${item.price} <span>$</span></p>
                <p class="itemname">${item.name}</p>
                <button class="item_btn">В корзину</button>
            </div>
        `
    })
    content.innerHTML = display.join(' ')

    const itembtn = document.querySelectorAll('.item_btn')

    for(let i = 0; i < itembtn.length; i++) {
        itembtn[i].addEventListener('click', (e) => {
            let el = e.target.parentElement;
            let uid = el.getAttributeNode('data-id').value
            let res = product.find((item) => item.id === uid)
            console.log(res);
        })
    }
})


const shop = document.querySelector('.shopcart')

let cnt = 0

shop.textContent = cnt











// function getshop() {
//     return localStorage.getItem('shop')? JSON.parse(localStorage.getItem('shop')) : []; 
// }

// let shopm = getshop()

// function addshop(id, price, name, img, cnt) {
//     let product = { id, price, name, img, cnt };
//     let products = getshop();
//     products.push(product);
//     localStorage.setItem('shop', JSON.stringify(products));
// }


// window.addEventListener('DOMContentLoaded', () => {
//     let display = shopm.map((item) => {
//         return `
//             <div class="item" data-id="${item.id}">
//                 <img class="item_saved" src="/img/Button.svg">
//                 <img class="fa-solid" src="/img/heart.jpg" alt="">
//                 <img class="item_img" src="/img/bgimg.jpg">
//                 <p class="item_price">${item.price} <span>$</span></p>
//                 <p class="itemname">${item.name}</p>
//                 <button class="item_btn">В корзину</button>
//             </div>
//         `
//     })
//     const footer = document.querySelector('.footer')
//     display = display.join(' ')
// })

