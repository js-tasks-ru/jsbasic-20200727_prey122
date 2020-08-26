function toggleText() {
  // ваш код...
  document.querySelector('.toggle-text-button').addEventListener('click', function(){
    let text = document.getElementById('text');
    if(text.hasAttribute('hidden')){
      text.removeAttribute('hidden')
    }else
    text.setAttribute('hidden', '');
    
  })
}
