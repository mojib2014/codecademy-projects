"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Get the title of current opened website.
 *
 * <example>
    :getTitleAsync.js
    client
        .url('http://webdriver.io')
        .getTitle().then(function(title) {
            console.log(title);
            // outputs the following:
            // "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
        });
 * </example>
 *
 * @alias browser.getTitle
 * @returns {String} current page title
 * @uses protocol/title
 * @type property
 *
 */

var getTitle = function getTitle() {
    return this.unify(this.title(), {
        extractValue: true
    });
};

exports.default = getTitle;
module.exports = exports["default"];
