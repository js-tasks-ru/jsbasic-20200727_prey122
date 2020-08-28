/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
   
    for(let i = 0; i < table.rows.length; i++){
        for (j=0; j < table.rows[i].cells.length; j++){
            if(table.rows[i].cells[j].dataset.available == 'true'){
                table.rows[i].classList.add( 'available');
            }
            if(table.rows[i].cells[j].dataset.available == 'false'){
                 table.rows[i].classList.add( 'unavailable');
                }
            if(table.rows[i].cells[j].dataset.available !== undefined){
                table.rows[i].removeAttribute('hidden'); 
            }else{table.rows[i].setAttribute('hidden','')}
            
            if(table.rows[i].cells[j].innerHTML == 'm'){
                console.log(table.rows[i]);
                table.rows[i].classList.add('male');
            }
            if(table.rows[i].cells[j].innerHTML === 'f'){
                table.rows[i].classList.add('female');
            }
            if(table.rows[i].cells[j].innerHTML < 18){
                table.rows[i].style.textDecoration = 'line-through';
            }
        }
    }
}
