export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    // ваш код
    console.log(this.cartItems);
    if (this.cartItems.find(item => item.product.id === product.id)){
      
      for(let item of this.cartItems){
        
        if(item.product.id === product.id){
          
            item.count++;
            this.onProductUpdate();
        }
      }
      return;
    }
    let newObject = Object.assign({},{
      product:product,
      count:1
    });
    this.cartItems.push(newObject);
    this.onProductUpdate();
  }

  updateProductCount(productId, amount) {
    // ваш код
    
    for(let i =0; i < this.cartItems.length; i++){

      if(this.cartItems[i].product.id === productId){
      let corect =  this.cartItems[i].count + amount;
      if (corect != 0){
        this.cartItems[i].count = corect;
      }else{   
        this.cartItems.splice(i, 1);
        }
      }
    }
    this.onProductUpdate();
    console.log(this.cartItems);
    
  }

  isEmpty() {
    // ваш кодф
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    // ваш код
    return this.cartItems.reduce((totalcount, product) => totalcount + product.count, 0);
  }

  getTotalPrice() {
    // ваш код
    let totalPrice = 0;
    for (let price of this.cartItems){
      totalPrice += (price.product.price * price.count);
    }
    return totalPrice;
  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

