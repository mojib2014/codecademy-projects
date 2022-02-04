'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _ErrorHandler = require('../utils/ErrorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTagName = function getTagName(selector) {
    var _this = this;

    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new _ErrorHandler.CommandError(7);
        }

        var elementIdNameCommands = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(res.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elem = _step.value;

                elementIdNameCommands.push(_this.elementIdName(elem.ELEMENT));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return _promise2.default.all(elementIdNameCommands);
    }).then(function (tagNames) {
        tagNames = tagNames.map(function (tagName) {
            return tagName.value.toLowerCase();
        });
        return tagNames.length === 1 ? tagNames[0] : tagNames;
    });
}; /**
    *
    * Get tag name of a DOM-element found by given selector.
    *
    * <example>
       :index.html
       <div id="elem">Lorem ipsum</div>
   
       :getTagNameAsync.js
       client.getTagName('#elem').then(function(tagName) {
           console.log(tagName); // outputs: "div"
       });
   
       :getTagNameSync.js
       it('should demonstrate the getTagName command', function () {
           var elem = browser.element('#elem');
   
           var tagName = elem.getTagName();
           console.log(tagName); // outputs: "div"
       })
    * </example>
    *
    * @alias browser.getTagName
    * @param   {String}           selector   element with requested tag name
    * @returns {String|String[]}             the element's tag name, as a lowercase string
    * @uses protocol/elements, protocol/elementIdName
    * @type property
    *
    */

exports.default = getTagName;
module.exports = exports['default'];
