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
  const tempObject = {};
  const typeOfTemp = temperature.charAt(temperature.length - 1);
  let ourTemperature = temperature.slice(0, -1);
  if (typeOfTemp !== 'C' && typeOfTemp !== 'K' && typeOfTemp !== 'F') {
    return null;
  }
  for (let i = 1; i < ourTemperature.length; i++) {
    if (ourTemperature[i] < '\u0030' || ourTemperature[i] > '\u0039') {
      return null;
    }
  }
  ourTemperature = +ourTemperature;
  if (typeOfTemp === 'C') {
    tempObject['C'] = Math.round(ourTemperature);
    tempObject['F'] = Math.round((ourTemperature * 9 / 5) + 32);
    tempObject['K'] = Math.round((ourTemperature + 273.15));
    return tempObject;
  } else if (typeOfTemp === 'K') {
    tempObject['K'] = Math.round(ourTemperature);
    tempObject['C'] = Math.round(ourTemperature - 273.15);
    tempObject['F'] = Math.round((ourTemperature - 273.15) * 9 / 5 + 32);
    return tempObject;
  } else if (typeOfTemp === 'F') {
    tempObject['F'] = Math.round(ourTemperature);
    tempObject['K'] = Math.round((ourTemperature - 32) * 5 / 9 + 273.15);
    tempObject['C'] = Math.round((ourTemperature - 32) * 5 / 9);
    return tempObject;
  } else {
    return null;
  }
}

module.exports = convertTemperature;
