/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let newArr = arr;
  if (a <= b){
    return newArr.filter(
      item => item >= a && item <= b
    );
  } return newArr.filter(
    item => item <= a && item >= b
  );
}
