'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Hide the keyboard.
 *
 * <example>
    :hideKeyboardDefaultSync.js
    browser.hideDeviceKeyboard() // taps outside to hide keyboard

    :hideKeyboardWithTapSync.js
    browser.hideDeviceKeyboard('tapOutside')

    :hideKeyboardDoneSync.js
    browser.hideDeviceKeyboard('pressKey', 'Done')
 * </example>
 *
 * @param {String} strategy  desired strategy to close keyboard ('tapOutside' or 'pressKey')
 *
 * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#hide-keyboard-ios-only
 * @type mobile
 * @for ios, android
 *
 */

var hideDeviceKeyboard = function hideDeviceKeyboard() {
    var strategy = arguments.length <= 0 || arguments[0] === undefined ? 'tapOutside' : arguments[0];
    var key = arguments[1];

    var args = { strategy: strategy };

    if (key) {
        args.key = key;
    }

    return this.requestHandler.create({
        path: '/session/:sessionId/appium/device/hide_keyboard',
        method: 'POST'
    }, args);
};

exports.default = hideDeviceKeyboard;
module.exports = exports['default'];
