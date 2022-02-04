'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var setImmediateValue = function setImmediateValue(id, value) {
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new _ErrorHandler.ProtocolError('setImmediateValue requires two parameters (id, value) from type string');
    }

    return this.requestHandler.create({
        path: '/session/:sessionId/appium/element/' + id + '/value',
        method: 'POST'
    }, { value: value });
}; /**
    *
    * Set immediate value in app.
    *
    * <example>
       :setImmediateValueSync.js
       browser.setImmediateValue(el, 'foo')
    * </example>
    *
    * @type mobile
    * @for ios
    *
    */

exports.default = setImmediateValue;
module.exports = exports['default'];
