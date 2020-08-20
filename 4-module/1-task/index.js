/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let div
  div = document.createElement('ul')
  for(let li of friends){
    div.innerHTML += `<li> ${li.firstName} ${li.lastName} </li>`;
  }
  return div;
}
