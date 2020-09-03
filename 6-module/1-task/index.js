/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.render(rows);
    this.elem.addEventListener('click',(e) => this.onClick(e));
  }
  render(arr){
    let newString = arr.map(
    row => `<tr><td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td><td><button>X</button></td></tr>`)
    .join('');
    this.elem.innerHTML = newString;
  }
  onClick(e){
    let element = e.target.closest('tr');
    
    if(e.target.tagName == 'BUTTON'){
      element.remove();
    }
    
  }
}
