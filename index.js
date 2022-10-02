const btns = [...document.querySelectorAll('[data-name]')]; //zamiana NodeList na tablicę

const shop = new Shop();

const shopUl = document.querySelector('.shop-list');
const butBtnAll = document.querySelector('.btn-buy-all');

const removeItem = event =>{
    const id = Number(event.target.dataset.id);
    shop.remove(id);
    createShopUi();
}

const createShopUi = () => {
    shopUl.innerText = '';
    for(const {text,id} of shop.viewAllAddedProducts()){

        const newLi = document.createElement('li');
        newLi.innerText= text;
        newLi.addEventListener('click',removeItem);
        newLi.dataset.id=id;
        shopUl.appendChild(newLi);

    }
const shopTotalValue = shop.getTotalValue();
    butBtnAll.innerText=`Złóż zamówienie na kwotę ${shopTotalValue.toFixed(2)} zł`;
    butBtnAll.disabled = shopTotalValue===0
};

const buyAllPRoducts = () => {
    shop.clearShop();
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

butBtnAll.addEventListener('click',buyAllPRoducts);