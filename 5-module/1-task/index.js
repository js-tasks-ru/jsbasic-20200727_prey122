function hideSelf() {
  // ваш код...
  document.querySelector('.hide-self-button').addEventListener("click", function(){
    this.setAttribute('hidden', '');
  });
  
}
//console.log(document.querySelector('.hide-self-button'));
