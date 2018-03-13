var r1 = require('../roundOne');

test('moves all zeroes in an array to the beginning', function() {
    var expected = [1, 2, 0, 0];
    var actual = r1.leadZeroes(expected);
    expect(expected).toBe(actual);
    expect(r1.leadZeroes(expected)).toEqual([0,0,1,2]);
    expect(r1.leadZeroes(sameArr)).toEqual([0,0,1,2])
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

test('sets a function to only be callable once and return "undefined" thereafter', function() {
    function testfn() {
        return 'Called'
    }

    expect(r1.onlyOnce(testfn)).toEqual('Called');
    expect(testfn()).toEqual('undefined')
});

test('returns the next multiple of 5', function() {
    expect(r1.nextFive(6)).toEqual(10);
    expect(r1.nextFive(25)).toEqual(30);
    expect(r1.nextFive(3.1)).toEqual(5);
    expect(r1.nextFive(0)).toEqual(5);
});


test('sorts an object alphabetically', function() {
    expect(r1.osort({z: 3, a: 1})).toEqual({a: 1, z: 3})
});

