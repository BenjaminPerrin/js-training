'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

function yell(str) {
    return str.toUpperCase();
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell("salut"), "SALUT")// End of tests */