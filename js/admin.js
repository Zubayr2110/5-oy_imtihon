const  namep = document.getElementById('product-name');
const price = document.getElementById('product-price');
const btn = document.getElementById('btn')

const img = 'https://picsum.photos/200/300'

const content = document.querySelector('.content')


let id = new Date().getTime().toString().slice(-5, -1);


function getlocalstorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function addlocalstorage(id, price, name) {
    let product = { id, price, name }
    let products = getlocalstorage();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

let product = getlocalstorage()



btn.addEventListener('click', () => {
    addlocalstorage(id, price.value, namep.value);
})  // add local storage

document.addEventListener('DOMContentLoaded', () => {
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
    });
    content.innerHTML = display.join(' ');
    
    const itembtn = document.querySelectorAll('.item_btn')

    for(let i = 0; i < itembtn.length; i++) {
        itembtn[i].addEventListener('click', (e) => {
            let el = e.target.parentElement;
            let uid = el.getAttributeNode('data-id').value
            let res = product.find((item) => item.id === uid)
            console.log(res);
        })
    }

});


function getshop() {
    return localStorage.getItem('shop')? JSON.parse(localStorage.getItem('shop')) : []; 
}

let shop = getshop()

function addshop(id, price, name, img, cnt) {
    let product = { id, price, name, img, cnt };
    let products = getshop();
    products.push(product);
    localStorage.setItem('shop', JSON.stringify(products));
}


window.addEventListener('DOMContentLoaded', () => {
    let display = shop.map((item) => {
        return `
            <div class="item" data-id="${item.id}">
                <img class="item_saved" src="/img/Button.svg">
                <img class="fa-solid" src="/img/heart.jpg" alt="">
                <img class="item_img" src="/img/bgimg.jpg">
                <p class="item_price">${item.price} <span>$</span></p>
                <p class="itemname">${item.name}</p>
                <button class="item_btn">В корзину</button>
            </div>
        `
    })
    const footer = document.querySelector('.footer')
    display = display.join()
    footer.innerHTML = display
})


// shop cart button 

const shopm = document.querySelector('.shopcart')

let cnt = 0

shopm.textContent = cnt
// 

const main = document.querySelector('.nav_list-logo')

main.addEventListener('click', () => {
    location.href = '/page/main.html'
})