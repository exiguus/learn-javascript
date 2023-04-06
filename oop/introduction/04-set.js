"use strict";

const primes = [2, 3, 5, 7, 11, 13, 17, 19];

const primesSet = new Set(primes);

console.log(primesSet);

primesSet.add(2);
primesSet.add(5);
primesSet.add(19);

console.log(primesSet);

for (const item of primesSet) {
    console.log(item);
}

for (const item of primesSet.keys()) {
    console.log(item);
}

for (const item of primesSet.values()) {
    console.log(item);
}

for (const item of primesSet.entries()) {
    console.log(item);
}
