'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _ErrorHandler = require('../utils/ErrorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLocation = function getLocation(selector, prop) {
    var _this = this;

    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new _ErrorHandler.CommandError(7);
        }

        var results = [];
        var that = _this;
        return new _promise2.default(function (resolve, reject) {
            var hasError = false;

            function processNext() {
                var current = res.value.pop();

                return that.elementIdLocation(current.ELEMENT).catch(function (err) {
                    hasError = true;
                    reject(err);
                }).then(function (location) {
                    if (hasError) {
                        return;
                    }

                    if (prop === 'x' || prop === 'y') {
                        results.push(location.value[prop]);
                    } else {
                        results.push({
                            x: location.value.x,
                            y: location.value.y
                        });
                    }

                    if (res.value.length) {
                        return processNext();
                    } else {
                        resolve(results.length === 1 ? results[0] : results);
                    }
                });
            }

            return processNext();
        });
    });
}; /**
    *
    * Determine an element’s location on the page. The point (0, 0) refers to
    * the upper-left corner of the page.
    *
    * <example>
       :getLocation.js
       client
           .url('http://github.com')
           .getLocation('.header-logo-wordmark').then(function (location) {
               console.log(location); // outputs: { x: 100, y: 200 }
           })
           .getLocation('.header-logo-wordmark', 'x').then(function (location) {
               console.log(location); // outputs: 100
           })
           .getLocation('.header-logo-wordmark', 'y').then(function (location) {
               console.log(location); // outputs: 200
           });
    * </example>
    *
    * @alias browser.getLocation
    * @param {String} selector    element with requested position offset
    * @returns {Object|Object[]}  The X and Y coordinates for the element on the page (`{x:number, y:number}`)
    * @uses protocol/elements, protocol/elementIdLocation
    * @type property
    *
    */

exports.default = getLocation;
module.exports = exports['default'];
