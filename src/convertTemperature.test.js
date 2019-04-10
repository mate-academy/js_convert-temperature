'use strict';

const convertTemperature = require('./convertTemperature');

test('Convert 0C', () => {
  expect(convertTemperature('0C'))
    .toEqual({ C: 0, F: 32, К: 273 });
});

test('Convert 451F', () => {
  expect(convertTemperature('451F'))
    .toEqual({ C: 233, F: 451, К: 506 });
});

test('Convert 125K', () => {
  expect(convertTemperature('125K'))
    .toEqual({ C: -148, F: -235, К: 125 });
});

test('Convert -10C', () => {
  expect(convertTemperature('0C'))
    .toEqual({ C: -10, F: 14, К: 263 });
});

test('Convert 0', () => {
  expect(convertTemperature('0'))
    .toBe(null);
});

test('Convert zero', () => {
  expect(convertTemperature('zero'))
    .toBe(null);
});

test('Convert 0M', () => {
  expect(convertTemperature('0M'))
    .toBe(null);
});

test('Convert 0.00C', () => {
  expect(convertTemperature('0.00C'))
    .toBe(null);
});

test('Convert 12CK', () => {
  expect(convertTemperature('12CK'))
    .toBe(null);
});

test('Convert "today is 12C"', () => {
  expect(convertTemperature('today is 12C'))
    .toBe(null);
});

test('Convert "12C is cold"', () => {
  expect(convertTemperature('12C is cold'))
    .toBe(null);
});
