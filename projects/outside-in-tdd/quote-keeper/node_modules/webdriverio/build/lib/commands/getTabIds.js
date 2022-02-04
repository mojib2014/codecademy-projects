"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Retrieve a list of all window handles available in the session.
 *
 * @alias browser.getTabIds
 * @returns {String[]} a list of window handles
 * @uses protocol/windowHandles
 * @type window
 *
 */

var getTabIds = function getTabIds() {
    return this.unify(this.windowHandles(), {
        extractValue: true
    });
};

exports.default = getTabIds;
module.exports = exports["default"];
