'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * End the session and close browser.
 *
 * <example>
    :endAsync.js
    client
        .init() // starts session and opens the browser
        .url('http://google.com')
        // ... other commands
        .end(); // ends session and close browser
 * </example>
 *
 * @alias browser.end
 * @uses protocol/session
 * @type utility
 *
 */

var end = function end() {
    return this.session('delete');
};

exports.default = end;
module.exports = exports['default'];
