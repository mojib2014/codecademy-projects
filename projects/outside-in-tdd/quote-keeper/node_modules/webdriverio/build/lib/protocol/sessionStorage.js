'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Protocol bindings for all sessionStorage operations. (Not part of the official Webdriver specification).
 *
 * <example>
    :sessionStorage.js
    // get the storage item for the given key
    client.sessionStorage('GET', someKey).then(function(res) { ... });

    // get all keys of the storage
    client.sessionStorage().then(function(res) { ... });

    // set the storage item for the given key
    client.sessionStorage('POST', {key: someKey, value: someValue});

    // remove the storage item for the given key
    client.sessionStorage('DELETE', 'someKey');

    // clear the storage
    client.sessionStorage('DELETE');
 * </example>
 *
 * @param {String=}        method  method for storage operation
 * @param {Object|String=} args    operation arguments
 *
 * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storage
 * @type protocol
 *
 */

var sessionStorage = function sessionStorage() {
    var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
    var args = arguments[1];

    /**
     * set default options
     */
    var data = {};
    var requestOptions = {
        path: '/session/:sessionId/session_storage',
        method: method.toUpperCase()
    };

    if (requestOptions.method === 'POST' && (typeof args === 'undefined' ? 'undefined' : (0, _typeof3.default)(args)) === 'object') {
        data = {
            key: args.key,
            value: args.value
        };
    }

    /**
     * add/delete specific key
     */
    if (requestOptions.method === 'DELETE' && typeof args === 'string' || requestOptions.method === 'GET' && typeof args === 'string') {
        requestOptions.path += '/key/' + args;
    }

    return this.requestHandler.create(requestOptions, data);
};

exports.default = sessionStorage;
module.exports = exports['default'];
