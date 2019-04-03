'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
    let valuesArray  = str.split(' ').join(',').split(',');
    const minmax = {
        min: 0.0,
        max: 0.0
    };

    for (let i = 0; i < valuesArray.length; i++){
        valuesArray[i] = parseFloat (valuesArray[i], 10);
    }
    minmax.max = minmax.min = valuesArray[0];
    for (let i = 1; i < valuesArray.length; i++){
        if (valuesArray[i] > minmax.max) minmax.max = valuesArray[i];
        if (valuesArray[i] < minmax.min) minmax.min = valuesArray[i];
    }
    console.log (minmax);
    return minmax;
}

