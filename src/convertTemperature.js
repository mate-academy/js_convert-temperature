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
  let kelvin;
  let celsius;
  let fahrenheit;
  let temperatureNum = temperature.substring(0, temperature.length - 1);
  temperatureNum = Number(temperatureNum);
  if (temperature.includes('.')) {
    return null;
  } else if (temperature.includes('C') || temperature.includes('C')) {
    celsius = temperatureNum;
    fahrenheit = Math.round(temperatureNum * 1.8 + 32);
    kelvin = temperatureNum + 273;
  } else if (temperature.includes('F')) {
    fahrenheit = temperatureNum;
    celsius = Math.round((temperatureNum - 32) / 1.8);
    kelvin = Math.round((temperatureNum - 32) / 1.8 + 273);
  } else if (temperature.includes('K')) {
    kelvin = temperatureNum;
    celsius = temperatureNum - 273;
    fahrenheit = 1.8 * temperatureNum - 459.67;
  }
  ;
  if (fahrenheit === 0 && celsius === 0 && kelvin === 0) {
    return null;
  } else if (!fahrenheit && !celsius && !kelvin) {
    return null;
  } else {
    return {
      C: celsius,
      F: Math.round(fahrenheit),
      K: kelvin,
    };
  }
}

module.exports = convertTemperature;
