/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str = str.toUpperCase();
    if(str.indexOf('1XBET') !== -1 || str.indexOf('XXX') !== -1){
        return true;
    }else 
    return false;
}
