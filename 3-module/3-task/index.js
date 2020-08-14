/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let target = '-';
  let pos = -1;
  let newArr = str;
  newArr = newArr.split('');
  while((pos = newArr.indexOf(target,pos + 1)) != -1){
      pos;
      newArr.splice(pos,2,newArr[++pos].toUpperCase());
      
  };
  return newArr = newArr.join('');

}
