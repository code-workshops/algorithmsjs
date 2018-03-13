var r1 = require('../roundOne');

test('moves all zeroes in an array to the beginning', function() {
    expect(r1.leadZeroes([1,2,0,0])).toEqual([0,0,1,2])
});

test('creates an array of unique values', function() {
    expect(r1.setter([1,1,2,2,3,3])).toEqual([1,2,3])
});

test('determines if a number is prime or not', function() {
    expect(r1.isPrime(5)).toEqual(true)
});

test('finds the remainder of division without %', function() {
    expect(r1.modulus(7,3)).toEqual(1)
});