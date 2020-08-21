/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
   // console.log( table.rows[1].cells[2].innerHTML);
    for(let i = 0; i < table.rows.length; i++){
        for (j=0; j < table.rows[i].cells.length; j++){
            if(table.rows[i].cells[j].dataset.available == 'true'){
                table.rows[i].cells[j].setAttribute('class', 'available');
            }
            if(table.rows[i].cells[j].dataset.available == 'false')
            { table.rows[i].cells[j].setAttribute('class', 'unavailable');}
            if(table.rows[i].cells[j].dataset.available == undefined){
                table.rows[i].cells[j].setAttribute('hidden','');
            }
            if(table.rows[i].cells[j].innerHTML === 'm'){
                table.rows[i].cells[j].setAttribute('class','male');
            }
            if(table.rows[i].cells[j].innerHTML === 'f'){
                table.rows[i].cells[j].setAttribute('class','female');
            }
            if(table.rows[i].cells[j].innerHTML < 18){
                table.rows[i].cells[j].style.textDecoration = 'line-through';
            }
        }
    }
}
