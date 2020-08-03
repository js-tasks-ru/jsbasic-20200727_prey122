/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 0){
    num = 1;
  }
  else  var num = 1 ;
  for (let i = 1; i <= n; i++){
    num *= i;
  }
  return num;
}
