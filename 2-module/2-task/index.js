'use strict';
/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
let obj = {
    options: {
        color: 'red'
    },
    style: {
        border: {
            color: 'red'
        }
    }
};

let myObj= find (obj, "red");

function find (obj, value) {

    let propertyPaths = [];
    for (let prop in obj) {
        let propertyPath = '';
        if (obj.hasOwnProperty(prop)){
            if (typeof (obj[prop]) === "object") {
                let temp = find (obj[prop], value);
                if (temp === null) return null;
                propertyPath += prop + '.' + temp.toString().split(',').join('.');
            }
            else if (obj[prop] === value){
                propertyPath += prop;
            }
            else return null;
        }
        propertyPaths = propertyPaths.concat(propertyPath);
    }
    if (propertyPaths.length === 1) return propertyPaths[0];
    return propertyPaths;
}
/*
function clonePartial (obj, value) {
    let clonedObject = {};
    if (obj === null) return obj;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)){
            if (typeof (obj[prop]) === "object") {
                clonedObject[prop] = clone (obj[prop]);
            }
            else {
                if (obj[prop] === value) clonedObject[prop] = obj[prop];
            }
        }
    }
    return clonedObject;
}*/