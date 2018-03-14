/**
 * Lead with Zeroes
 * @description: Returns the same array, but moves all zeroes in the array to the front.
 * Do not return a new array. It must be the same array!
 *      Ex: leadZeroes([2,2,0,1,0]) => [0,0,2,2,1]
 *
 * @param {array} arr - An array of integers
 */
function leadZeroes(arr) {
    // First trial
    // Where are all the zeroes? Lets find them and place them here
    var indices = [];
    arr.forEach(function(item, idx, arr) {
        if (item == 0) {
            indices.push(idx)
        }
    });
    // Now that we have them, lets remove them.
    // For each 0 we remove, add a 0 to the front
    for (var i = 0; i < indices.length; i++) {
        arr.splice(indices[i], 1);
        arr.unshift(0);
    }
    // Return the same array
    return arr
    // Can you do this in a different way?
}

/**
 * Setter
 * @description: Returns an array of unique numbers.
 *      Ex: setter([1,1,2,2,3,3]) => [1,2,3]
 *
 * @param {array} arr - An array of data
 */
function setter(arr) {
    // Gather all the unique items here.
    var newArr = [];
    // Iterate over the original array to search it
    arr.forEach(function(item, idx, arr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
        // Only items NOT in newArr need to be added.
    });
    // Return our unique list!
    return newArr;
    // Can you do this differently?
}

/**
 * Is Prime
 * @description: Return true if the given number is a prime number, false otherwise
 *      Ex: isPrime(3) => true
 *
 * Resources:
 * https://en.wikipedia.org/wiki/Prime_number
 * https://youtu.be/mIStB5X4U8M
 * @param num
 */
function isPrime(num) {
    if (num === 2 || num === 3) { return true }
    // A prime number is the product of itself and 1.
    // Suppose 10 x 10 = 100. So is 2 x 50.
    // Note that in both cases either the multiples are equal
    // or one is greater than the other, to equal 100 together.
    // If our number is prime, its multiples will be 1 and itself.
    // That's why we only have to check the numbers less than
    // the square root of num instead of every number from 1 to num
    var sqrt = Math.floor(Math.sqrt(num)) + 1;
    var is = true;

    // Start with 2 since num % 1 is num
    for(var i=2; i < sqrt; i++) {
        if(num % i === 0) {
            is = false;
            break
        }
    }
    return is;
}

/**
 * Modulus
 * @description: Write a function that returns the remainder form dividing 2 integers WITHOUT USING %
 *      Ex: modulus(7, 3) => 1
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor) {
    var quotient = parseInt(dividend/divisor);
    return dividend - (quotient * divisor)
}

/**
 * Next Five
 * @description: Write a function that takes a number and returns the next
 * multiple of 5
 *      Ex: nextFive(6) => 10
 *          nextFive(25) => 30
 *
 * @param num
 */
function nextFive(num) {
    var remainder = num % 5;
    return num + (5 - remainder)
}

/**
 * Object Sort
 * @description: Write a function that takes an object and sorts it
 * alphabetically by key. Keys will always be alphabets (a-z or A-Z).
 *      Ex: osort({z: 3, a: 1}) => {a: 1, z: 3}
 *
 * @param obj
 */
function osort(obj) {
    // First lets only worry about the keys. Then sort them.
    var keys = Object.keys(obj).sort();
    // Create a new object for the sorted data.
    var sorted = {};
    // Iterate through the keys and set their values
    keys.forEach(function(k, idx, arr) {
        sorted[k] = obj[k];
    });
    return sorted
    // Can you think of a different way to approach this?
}

module.exports = {
    leadZeroes: leadZeroes,
    setter: setter,
    isPrime: isPrime,
    modulo: modulo,
    nextFive: nextFive,
    osort: osort
};
