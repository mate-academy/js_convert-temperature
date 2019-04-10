'use strict';

/**
 * Implement convertTemperature function:
 *
 * Function takes a string which contains temperature (integer) and one of the
 * measurement units (Celsius, Kelvin or Fahrenheit): '21C', '299K', '79F' and
 * returns an object containing temperature converted to all allowed units and
 * rounded with Math.round(). Return null if input is wrong.
 *
 * convertTemperature('0C') === { C: 0, F: 32, К: 273 }
 * convertTemperature('451F') === { C: 233, F: 451, К: 506 }
 * convertTemperature('0') === null
 * convertTemperature('zero') === null
 * convertTemperature('0M') === null
 * convertTemperature('0.00C') === null
 *
 * https://www.convert-me.com/ru/convert/temperature/?u=dfahrenheit&v=451
 *
 * @param {string} temperature
 *
 * @return {object} - converted temperatures
 */
function convertTemperature(temperature) {
  // write code here
}

module.exports = convertTemperature;
