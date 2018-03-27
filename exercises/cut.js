'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(str) {
    return str.slice(2);
}
function cutLast(str) {
    return str.slice(0, str.length - 2);
}
function cutFirstLast(str) {
    str = str.slice(0, str.length - 2);
    return str.slice(2);
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('qwerty'), 'erty')

assert.strictEqual(cutLast('qwerty'), 'qwer')

assert.strictEqual(cutFirstLast('qwerty'), 'er')
// End of tests */
