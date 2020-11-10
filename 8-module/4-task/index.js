import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
  }

  addProduct(product) {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    let cartItem = this.cartItems.find(
      item => item.product.id == product.id
    );
    if (!cartItem) {
      cartItem = {
        product,
        count: 1
      };
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    
    let cartItem = this.cartItems.find(item => item.product.id == productId);
    cartItem.count += amount;

    if (cartItem.count === 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    );
  }

  renderProduct(product, count) {
    let totalPrice = product.price * count;
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
    // ...ваш код
    this.modal = new Modal;
    this.modal.setTitle('Your order');
    let productArr = this.cartItems.map(item => this.renderProduct(item.product, item.count).outerHTML).join('');
    let form = this.renderOrderForm().outerHTML;
    this.modal.setBody(createElement(`<div>${productArr}${form}</div>`));
    this.modal.open();

    this.modal.elem.addEventListener('click', event => {
      let product_card = event.target.closest('.cart-product');
      
      if (product_card && event.target.closest('.cart-counter__button_plus')) {
        let data_id = product_card.dataset.productId;
        this.updateProductCount(data_id, 1);
     };

     if (product_card && event.target.closest('.cart-counter__button_minus')) {
      let data_id = product_card.dataset.productId;
      this.updateProductCount(data_id, -1);
     }
    });

    this.modal.elem.querySelector('.cart-form').addEventListener('submit',  event =>  this.onSubmit(event));
    
  }

  onProductUpdate() {
    // ...ваш код
    if(this.modal){
      let productArr = this.cartItems.map(item => this.renderProduct(item.product, item.count).outerHTML).join('');
      if(productArr){
      let form = this.renderOrderForm().outerHTML;
      this.modal.setBody(createElement(`<div>${productArr}${form}</div>`));}
      else {this.modal.close()}
    }
    

    this.cartIcon.update(this);
  }

 async onSubmit(event) {
    // ...ваш код
      event.preventDefault();
      
        
      event.target.querySelector('.cart-buttons__button').classList.add('is-loading');

      let formElem = event.target;
      let response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(formElem)
      });
      
      if (response.status === 200){
        this.modal.setTitle('Success!');
        this.cartItems.splice(0, this.cartItems.length);
        this.modal.setBody(createElement(`<div class="modal__body-inner">
                                        <p>
                                          Order successful! Your order is being cooked :) <br>
                                          We’ll notify you about delivery time shortly.<br>
                                          <img src="/assets/images/delivery.gif">
                                        </p>
                                      </div>`));
        this.cartIcon.update(this);                                      
      }      
      



  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}

