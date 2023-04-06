'use strict'

const primesMap = new Map()

primesMap.set(0, 2)
primesMap.set(1, 3)
primesMap.set(2, 5)
primesMap.set(3, 7)
primesMap.set(4, 11)
primesMap.set(5, 13)

console.log(primesMap.get(2))
console.log(primesMap)
console.log(Array.from(primesMap))

const original = new Map([
    [1, 'one'],
]);

const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone);

const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

const second = new Map([
    [4, 'four'],
    [5, 'five'],
    [6, 'six']
]);

const merged = new Map([...first, ...second]);

console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));
console.log(merged.get(4));