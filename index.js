const btns = [...document.querySelectorAll('[data-name]')]; //zamiana NodeList na tablicę

const shop = new Shop();

const shopUl = document.querySelector('.shop-list');


const createShopUi = () => {
    shopUl.innerText = '';
    for(const product of shop.viewAllAddedProducts()){
        const newLi = document.createElement('li');
        newLi.innerText= product;
        shopUl.appendChild(newLi);
    }

};

const addProductToShop = event=>{

const name = event.target.dataset.id;
const price = event.target.dataset.price;
const product = new Product(name,price);
shop.add(product);
console.log(shop.viewAllAddedProducts());
createShopUi();
};



for(const eachButton of btns){

eachButton.addEventListener('click',addProductToShop);
}