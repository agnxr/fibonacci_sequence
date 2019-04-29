const fib = require('../js/fib');

//1. standard test

//a) first value
test('First value', () => {
  expect(fib(0)[0]).toBe(0);
});

//b) 2nd and next value
test('Should render n + 1 items in the fibonacci sequence', () => {
  expect(fib(1)).toEqual([0, 1]);
  expect(fib(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  expect(fib(16)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
});

//2. invalid inputs

//a) empty value
test('throws for empty value', () => {
  expect(() => {
    fib();
  }).toThrowError(/empty value/);
});

//b) boolean
test('throws for boolean', () => {
  expect(() => {
    fib(true);
    fib(false);
  }).toThrowError(/boolean/);
});

//c) NaN (string)
test('throws for not a number', () => {
  expect(() => {
    fib("test");
  }).toThrowError(/not a number/);
});

//d) negative number
test('throws for negative number', () => {
  expect(() => {
    fib(-3);
  }).toThrowError(/negative number/);
});

//e) non integer
test('throws for non int', () => {
  expect(() => {
    fib(2.25);
  }).toThrowError(/not integer/);
});
