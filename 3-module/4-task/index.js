/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let someUser;
  someUser = users.filter(item => item.age <= age);
  let newArray = someUser.map( item => item.name + ", " + item.balance + '\n');
  newArray = newArray.join('');
  let minus_n = newArray.length;
  minus_n--;
  return newArray.slice(0, minus_n);
}
