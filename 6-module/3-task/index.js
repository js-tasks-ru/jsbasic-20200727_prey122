import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.className = 'carousel';
    this.renderArrow();
    this.renderCarousel_slider(slides);
    this.elem.addEventListener('click',(event) => this.onclick(event));
    this.width = 0;
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.caruselSlider = this.elem.querySelector('.carousel__slide');
    this.caruselInner =this.elem.querySelector('.carousel__inner');
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.countId = 0;
    this.elem.addEventListener('product-add', (event) => console.log(event.detail));
    if(this.width === 0){
      //this.arrowLeft.style.display = 'none';
      this.arrowLeft.style.display = 'none';
    }
  }

  renderArrow() {
    this.elem.innerHTML = `    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`;
  }

  renderCarousel_slider(slides) {
      let newCollectionSlides = slides.map(value => `<div class="carousel__slide" data-id="${value.id}">
      <img src="/assets/images/carousel/${value.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${value.price.toFixed(2)}</span>
        <div class="carousel__title">${value.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`).join('') ;
    this.elem.innerHTML += `<div class="carousel__inner">${newCollectionSlides}</div>`;
  }

  onclick(event) {
      if (event.target.closest('.carousel__arrow_right')) {
      this.arrowLeft.style.display = '';
      this.width += this.caruselSlider.offsetWidth;
      this.countId++;
     // console.log(this.countId);
      this.right(this.slides);
    }
      if (event.target.closest('.carousel__arrow_left')){
        this.arrowRight.style.display = '';
        this.width -= this.caruselSlider.offsetWidth;
        this.countId--;
        this.left();
       // console.log(this.width);
      }
      if (event.target.closest('.carousel__button')){
         let event = new CustomEvent('product-add', {
          detail: this.slides[this.countId].id ,
          bubbles: true
         })
         this.elem.dispatchEvent(event);
      }
  }

  right(arr){
    let allWidth = this.caruselSlider.offsetWidth * arr.length;
    //console.log(this.width );
    if (this.width < allWidth){
        this.caruselInner.style.transform = `translateX(-${this.width}px)`;
    }
    if(this.width == allWidth - this.caruselSlider.offsetWidth){
      this.arrowRight.style.display='none';
    }
  }

  left(){
    if(this.width >= 0){
      this.caruselInner.style.transform = `translateX(-${this.width}px)`;
    }
    if(this.width == 0){
      this.arrowLeft.style.display = 'none';
    }
  }
}
