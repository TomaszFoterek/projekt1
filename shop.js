class Shop{
    constructor() {
        this.items=[];
        this.totalPrice = 0;
    }

    add(item){
        this.items.push(item);
    }
    clearShop(){
        alert(`Zakupiono towar za ${shop.getTotalValue().toFixed(2)} zł`);
    this.items =[];
    createShopUi();
    }
    remove(item){
        this.items.splice(item,1);
    }

    addTotalPrice(totalValue){
        this.totalPrice += totalValue;
    }
    viewAllAddedProducts(products){
        return this.items
            .map((product,i)=>{
                return{
                    id: i+1,
                    text:`${i+1} - ${product.name} - ${product.price.toFixed(2)}zł`,
                }
                }
            )
    }

    getTotalValue(value){
        return this.items.reduce((prev,curr)=>
            prev +curr.price,0
        )
    }
}

class Product{
    constructor(productName,productPrice) {
        this.name = productName;
        this.price = Number(productPrice);
    }
}
