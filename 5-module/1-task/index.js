'use strict';

/*Напишите функцию highlight, которая для каждой строки tr таблицы:
- Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
- Проставит аттрибут hidden, если такого атрибута нет вообще
- Проставит класс male/female, в зависимости от содержимого ячекйки Gender
- Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18
*/
/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tr = '';
    let cells = '';

    for (let i = 0; i < table.rows.length; i++){
        if (table.rows[i].cells[3].getAttribute('data-available') === 'true' ) {
           if (!table.rows[i].classList.contains('available')) table.rows[i].className += ' available';
        } else if (table.rows[i].cells[3].getAttribute('data-available') === 'false' ){
            if (!table.rows[i].classList.contains('unavailable')) table.rows[i].className += ' unavailable';
        } else {
            table.rows[i].setAttribute('hidden', 'true');
        }

        if (table.rows[i].cells[2].innerText==='m'){
            if (!table.rows[i].classList.contains('male')) table.rows[i].className += ' male';
        } else if (table.rows[i].cells[2].innerText==='f') {
            if (!table.rows[i].classList.contains('female')) table.rows[i].className += ' female';
        }

        if (+table.rows[i].cells[1].innerText < 18) table.rows[i].setAttribute("style", "text-decoration: line-through");

        console.log (table.rows[i].classList);
    }

}