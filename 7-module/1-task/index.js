'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function makeLogging(fn, log) {


    return function() {
        let result = fn.apply(this, arguments);
        let temp = [];
        for (let argument in arguments){
            temp.push(arguments[argument]);
        }
        log.push(temp);
        return result;
    }
}