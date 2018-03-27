'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */

function whisper(str) {
    str = "*" + str.toLowerCase() + "*";
    return str;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('QWERTY'), '*qwerty*')
// End of tests */
