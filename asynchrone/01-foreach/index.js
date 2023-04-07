"use strict";

const primes = [2, 3, 5, 7, 11, 13, 17, 19];

const foreach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

foreach(primes, (item, index, _array) => {
    console.log(`item: ${item} with index ${index}`);
    console.log(`${item ** 2} is the square of ${item}\n`);
});
