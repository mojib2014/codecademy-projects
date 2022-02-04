'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Unlock the device.
 *
 * <example>
    :unlockIt.js
    browser.unlock()
 * </example>
 *
 * @type mobile
 * @for android
 *
 */

var unlock = function unlock() {
    return this.requestHandler.create({
        path: '/session/:sessionId/appium/device/unlock',
        method: 'POST'
    });
};

exports.default = unlock;
module.exports = exports['default'];
