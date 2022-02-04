'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Protocol bindings for all geolocation operations. (Not part of the official Webdriver specification).
 *
 * <example>
    :location.js
    // get the current geo location
    client.location().then(function(res) { ... });

    // set the current geo location
    client.location({latitude: 121.21, longitude: 11.56, altitude: 94.23})
 * </example>
 *
 * @param {Object} location  the new location
 * @returns {Object}         the current geo location
 *
 * @see  https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocation
 * @type protocol
 *
 */

var location = function location(l) {
    var data = {};

    if ((typeof l === 'undefined' ? 'undefined' : (0, _typeof3.default)(l)) === 'object' && l.latitude !== undefined && l.longitude !== undefined && l.altitude !== undefined) {
        data = l;
    }

    return this.requestHandler.create('/session/:sessionId/location', {
        location: data
    });
};

exports.default = location;
module.exports = exports['default'];
