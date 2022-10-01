class Shop{
    constructor() {
        this.items=[];
        this.totalPrice = 0;
    }

    add(item){
        this.items.push(item);
    }
    remove(item){
        this.items.splice(item,1);
    }

    addtotalPrice(totalValue){
        this.totalPrice += totalValue;
    }
    viewAllAddedProducts(products){
        return this.items
            .map((product,i)=>
                `${i+1} - ${product.name} - ${product.price.toFixed(2)}zł`

            )
    }
}

class Product{
    constructor(productName,productPrice) {
        this.name = productName;
        this.price = Number(productPrice);
    }
}
