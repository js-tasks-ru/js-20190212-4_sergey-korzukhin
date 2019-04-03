'use strict';
/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let clonedObject = {};
    if (obj === null) return obj;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)){
            if (typeof (obj[prop]) === "object") {
                clonedObject[prop] = clone (obj[prop]);
            }
            else {
                clonedObject[prop] = obj[prop];
            }
        }
    }
    return clonedObject;
}