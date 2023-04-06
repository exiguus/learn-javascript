"use strict";

const primesObject = {
    0: 2,
    1: 3,
    2: 5,
    3: 7,
    4: 11,
    5: 13,
    6: 17,
    7: 19,
};

console.log(primesObject[2]);
console.log(primesObject);

Object.assign(primesObject, {8: 23});
console.log(primesObject);
