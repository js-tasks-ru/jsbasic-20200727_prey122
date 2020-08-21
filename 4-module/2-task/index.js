/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    
    // table.rows[0].style.backgroundColor = 'red';
   for(let i = 0; i < table.rows.length; i++){

       table.rows[i].cells[i].style.backgroundColor= 'red';

   }
   
}
