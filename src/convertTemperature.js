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
  const char = temperature.charAt(temperature.length - 1);
  const obj = {};
  let num = temperature.slice(0, -1);
  for (let x = 1; x < num.length; x++) {
    if (num[x] < '\u0030' || num[x] > '\u0039') {
      return null;
    }
  }

  if (char !== 'C' && char !== 'K' && char !== 'F') {
    return null;
  }
  num = +num;
  if (char === 'C') {
    obj['C'] = Math.round(num);
    obj['F'] = Math.round((num * 9 / 5) + 32);
    obj['K'] = Math.round(num + 273.15);
    return obj;
  } else if (char === 'K') {
    obj['K'] = Math.round(num);
    obj['F'] = Math.round((num - 273.15) * 9 / 5 + 32);
    obj['C'] = Math.round(num - 273.15);
    return obj;
  } else {
    obj['F'] = Math.round(num);
    obj['K'] = Math.round((num - 32) * 5 / 9 + 273.15);
    obj['C'] = Math.round((num - 32) * 5 / 9);
    return obj;
  }
}

module.exports = convertTemperature;
