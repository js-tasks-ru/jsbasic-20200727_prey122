/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength){
     return str = str.slice(0, --maxlength) + '…';
  }else{
    return str;
  }

}
