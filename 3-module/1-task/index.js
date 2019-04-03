"use strict";
/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let salaries='';

    data.forEach(element => {
        if (parseInt(element.age) <= age){
            salaries +=  element.name + ', ' + element.balance + "\n";
        }
    });
    return salaries.trim();
}


