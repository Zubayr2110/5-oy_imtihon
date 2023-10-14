const main = document.querySelector('.nav_list-logo')
const user = document.querySelector('.nav_list1-usermenu')

user.addEventListener('click', () => {
    location.href = '/page/admin.html'
})

main.addEventListener("click", () => {
    location.href = '/page/main.html'
})
// shop cart button
const shop = document.querySelector('.shopcart')

let cnt = 0

shop.textContent = cnt
// 


const shopitem = document.querySelector('.shop_item')


function getLocalStorage() {
    return localStorage.getItem('shop')? JSON.parse(localStorage.getItem('shop')) : []; 
}

let product = getLocalStorage()

window.addEventListener("DOMContentLoaded", () => {
    let display = product.map((item) => {
        return `

            <div class="shop_item-list">
                <div class="shop_item-img">
                    <div class="shop_item-img-icon"><img src="/img/Checkbox.svg" class="shop_item-img-iconmain"></div>
                    <img src="/img/bgimg.jpg" class="shop_item-img1">
                </div>
                <div class="shop_item-text">
                    <p class="shop_item-text-name">${item.name}</p>
                    <p class="shop_item-text-price">${item.price} $ <span class="spanshop"> за шт.</span></p>
                </div>
                <div class="shop_item-count">
                    <p class="shop_item-count-left">-</p>
                    <p class="shop_item-count-main">${cnt}</p>
                    <p class="shop_item-count-right">+</p>
                </div>
                <p class="shop_item-price">${item.price} $</p>
            </div>
        `
    })
    shopitem.innerHTML = display.join('')
})