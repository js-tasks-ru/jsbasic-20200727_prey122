/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sumSalary = 0;
  for(let key in salaries){
    if (!isNaN(salaries[key])){
      sumSalary += salaries[key];
    }
  }

  return sumSalary;
}
