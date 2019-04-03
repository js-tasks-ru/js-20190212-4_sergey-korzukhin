"use strict";
/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let n;
let m;
n = +prompt("Enter value that you want to raise to a power.", "");
m =  +prompt("Enter power.", "");

alert (pow(n, m));

function pow (m, n) {
    if ((n ^ 0) !== n) {
        return "power must be integer";
    }
    let i, result = m;
    for (i = 1; i < n; i++) {
        result *= m;
    }
    return result;

}