/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let ul;
  ul = document.createElement('ul')
  for(let li of friends){
    ul.innerHTML += `<li> ${li.firstName} ${li.lastName} </li>`;
  }
  return ul;
}
