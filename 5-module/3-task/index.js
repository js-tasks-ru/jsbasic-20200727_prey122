function initCarousel() {
  // ваш код...
  let caruselInner = document.querySelector('.carousel__inner');
  let cruselSlider = document.querySelector('.carousel__slide');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let width = 0;
    if(width == 0 ){
      arrowLeft.style.display = 'none';
    }

  document.querySelector('.container').addEventListener(
    'click', function(e){
      
     
      let target = e.target;
     // console.log(target.className);
      while(target.className != this){
        if(target.className == 'carousel__arrow carousel__arrow_right') {
          arrowLeft.style.display = '';
          width += cruselSlider.offsetWidth;
          //console.log(width);
            right(caruselInner, cruselSlider, width, arrowRight);
            break;
        }
        if(target.className == 'carousel__arrow carousel__arrow_left'){
          //console.log(width);cruselSlider.offsetWidth
          arrowRight.style.display = '';
          width = width - cruselSlider.offsetWidth;
            left(caruselInner, width, arrowLeft);
            break;
        }
        target = target.parentNode;
        if(target.className == 'carousel__slide'){
          break
        }
      }
      
    }
  )
}


function right(carusel, cruselSlider ,width, arrow){
  let allWidth = cruselSlider.offsetWidth * 4;
 // console.log(allWidth);
//  console.log(width);2964
  if(width < allWidth){
    carusel.style.transform = `translateX(-${width}px)`;
  }
  if(width == 2964){
    arrow.style.display= 'none';
  }
  
}

function left(carusel, width, arrowLeft){
  console.log(width);
  if(width >= 0 ){
    carusel.style.transform = `translateX(-${width}px)`;
  }
  if(width == 0){
    arrowLeft.style.display= 'none';
  }
}