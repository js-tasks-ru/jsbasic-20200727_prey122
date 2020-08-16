/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  str = str.split(' ');
   str = str.map(item => item.split(','));
   str = str = str.map(item => item.join(' '));
   str = str.join(' ');
   str =  str.split(' ');
    str = str.filter(item => !isNaN(item));
   let result ={};
   result.max = Math.max(...str);
   result.min = Math.min(...str);
   return result;
}
