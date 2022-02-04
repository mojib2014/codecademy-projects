'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var touch = function touch(selector, longClick) {
  var _this = this;

  /**
   * we can't use default values for function parameter here because this would
   * break the ability to chain the command with an element if reverse is used
   */
  longClick = typeof longClick === 'boolean' ? longClick : false;

  if (!this.isMobile) {
    throw new _ErrorHandler.CommandError('touch command is not supported on non mobile platforms');
  }

  var touchCommand = longClick ? 'touchLongClick' : 'touchClick';

  return this.getLocation(selector).then(function (val) {
    return _this[touchCommand](val.x, val.y);
  });
}; /**
    * Put finger on an element (only in mobile context).
    *
    * @alias browser.touch
    * @param {String}  selector  element to put finger on
    * @param {Boolean} longClick if true touch click will be long (default: false)
    * @uses property/getLocation, protocol/touchClick
    * @type mobile
    * @uses android
    *
    */

exports.default = touch;
module.exports = exports['default'];
