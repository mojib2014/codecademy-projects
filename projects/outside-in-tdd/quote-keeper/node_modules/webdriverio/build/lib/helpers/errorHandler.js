'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
/**
 * stale reference error handler
 */
function (e) {
    if (!e.seleniumStack || e.seleniumStack.type !== 'StaleElementReference') {
        return;
    }

    /**
     * get through command list and find most recent command where an element(s)
     * command contained the failing json web element
     */
    var failingCommand = this.commandList.slice(-1)[0];

    var commandToRepeat = void 0;
    for (var i = this.commandList.length - 1; i >= 0; --i) {
        var command = this.commandList[i];

        if (command.name !== 'element' && command.name !== 'elements') {
            continue;
        }
        if (command.name === 'element' && (!command.result[0].value || command.result[0].value.ELEMENT !== failingCommand.args[0])) {
            continue;
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(command.result.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var result = _step.value;

                if (result.ELEMENT === failingCommand.args[0]) {
                    commandToRepeat = this.commandList[i - 1];
                    break;
                }
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

        if (commandToRepeat) {
            break;
        }
    }

    if (!commandToRepeat) {
        return;
    }

    return this[commandToRepeat.name].apply(this, commandToRepeat.args);
}];
module.exports = exports['default'];
