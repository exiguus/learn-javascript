'use strict'

const cons = function (car, cdr) {
    const toString = () => `(${car}, ${cdr})`
    return {
        car,
        cdr,
        toString,
    }
}

const list = function (...args) {
    const [first, ...rest] = args;

    if (rest.length === 0) {
        return cons(first, null)
    }

    return cons(first, list(...rest))
};

const primes = list(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97)

console.log(primes.toString())