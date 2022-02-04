"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Get source code of the page.
 *
 * <example>
    :getSourceAsync.js
    client
        .url('http://webdriver.io')
        .getSource().then(function(source) {
            console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
        });
 * </example>
 *
 * @alias browser.getSource
 * @returns {String} source code of current website
 * @uses protocol/source
 * @type property
 *
 */

var getSource = function getSource() {
    return this.unify(this.source(), {
        extractValue: true
    });
};

exports.default = getSource;
module.exports = exports["default"];
