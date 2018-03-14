var r1 = require('../roundOne');

test('moves all zeroes in an array to the beginning', function() {
    var expected = [1, 2, 0, 0];
    var actual = r1.leadZeroes(expected);
    expect(expected).toBe(actual);
    expect(r1.leadZeroes(expected)).toEqual(actual)
});

describe('setter()', function() {
    test('creates an array of unique values 1', function() {
        expect(r1.setter([1,1,2,2,3,3])).toEqual([1,2,3])
    });
    test('creates an array of unique values 2', function() {
        expect(r1.setter(['dog', 'troll', 1, 'dog'])).toEqual(['dog', 'troll', 1])
    });
});


describe('isPrime', function() {
    test('determines if a number is prime or not', function() {
        expect(r1.isPrime(5)).toEqual(true);
    });
    test('determines if a number is prime or not', function() {
        expect(r1.isPrime(11)).toEqual(true);
    });
    test('determines if a number is prime or not', function() {
        expect(r1.isPrime(29)).toEqual(true);
    });

});

describe('modulo()', function() {
    test('finds the remainder of 7/3', function() {
        expect(r1.modulo(7,3)).toEqual(1)
    });
    test('finds the remainder of 21/8', function() {
        expect(r1.modulo(21,8)).toEqual(5)
    });
    test('finds the remainder of 105/12', function() {
        expect(r1.modulo(105,12)).toEqual(9)
    });
});

describe('nextFive()', function() {
    test('returns the next multiple of 5', function() {
        expect(r1.nextFive(6)).toEqual(10);
    });
    test('returns next 5 after 25', function() {

        expect(r1.nextFive(25)).toEqual(30);
    });
    test('returns next 5 after 3.1', function() {

        expect(r1.nextFive(3.1)).toEqual(5);
    });
    test('returns next 5 after 0', function() {
        expect(r1.nextFive(0)).toEqual(5);
    })
});



test('sorts an object alphabetically', function() {
    expect(r1.osort({z: 3, a: 1})).toEqual({a: 1, z: 3});
    expect(r1.osort({marketing: true, email: false, phone: false})).toEqual({email: false, marketing: true, phone: false})
});

