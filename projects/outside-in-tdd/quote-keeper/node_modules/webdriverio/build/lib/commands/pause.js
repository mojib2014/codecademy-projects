"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * pauses queue execution for a specific amount of time
 *
 * <example>
    :pauseAsync.js
    var starttime = new Date().getTime();

    client
        .pause(3000)
        .call(function() {
            var endtime = new Date().getTime();
            console.log(endtime - starttime); // outputs: 3000
        })
 * </example>
 *
 * @alias browser.pause
 * @param {Number} milliseconds time in ms
 * @type utility
 *
 */

var pause = function pause() {
    var milliseconds = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];

    return new _promise2.default(function (resolve) {
        return setTimeout(resolve, milliseconds);
    });
};

exports.default = pause;
module.exports = exports["default"];
