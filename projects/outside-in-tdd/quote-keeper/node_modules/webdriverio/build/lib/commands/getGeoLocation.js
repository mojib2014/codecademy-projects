"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * Get the current geolocation.
 *
 * @alias browser.getGeoLocation
 * @returns {Object} the current geo location (`{latitude: number, longitude: number, altitude: number}`)
 * @uses protocol/location
 * @type mobile
 *
 */

var getGeoLocation = function getGeoLocation() {
    return this.unify(this.location(), {
        extractValue: true
    });
};

exports.default = getGeoLocation;
module.exports = exports["default"];
