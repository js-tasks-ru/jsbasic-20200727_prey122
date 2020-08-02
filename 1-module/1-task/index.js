/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 0){
    n = 1;
  }
  else  
  for (let i = 1; i < n; i++){
    n *= i;
  }
  return n;
}
