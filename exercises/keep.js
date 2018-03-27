'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(str) {
    return str.substr(0, 2);
}
function keepLast(str) {
    return str.substr(str.length - 2, str.length);
}
function keepFirstLast(str) {
    let str1 = str.substr(str.length - 2, str.length);
    let str2 = str.substr(0, 2);
    return str2 + str1;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('qwerty'), 'qw')

assert.strictEqual(keepLast('qwerty'), 'ty')

assert.strictEqual(keepFirstLast('qwerty'), 'qwty')
// End of tests */