"use strict";

const fib = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
};

console.time("Recursive");
console.log("Recursive");
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(42));
console.timeEnd("Recursive");

const fibMemo = function (n, memo = {}) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

    return memo[n];
};

console.time("Memoized");
console.log("Memoized");
console.log(fibMemo(0));
console.log(fibMemo(1));
console.log(fibMemo(2));
console.log(fibMemo(3));
console.log(fibMemo(4));
console.log(fibMemo(2 * 42));
console.timeEnd("Memoized");

const fibMemo2 = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    if (!fibMemo2.memo) {
        fibMemo2.memo = {};
    }

    if (fibMemo2.memo[n]) {
        return fibMemo2.memo[n];
    }

    fibMemo2.memo[n] = fibMemo2(n - 1) + fibMemo2(n - 2);

    return fibMemo2.memo[n];
};

console.time("Memoized 2");
console.log("Memoized 2");
console.log(fibMemo2(0));
console.log(fibMemo2(1));
console.log(fibMemo2(2));
console.log(fibMemo2(3));
console.log(fibMemo2(4));
console.log(fibMemo2(2 * 42));

const fibIter = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const temp = curr;
        curr = prev + curr;
        prev = temp;
    }

    return curr;
};

console.time("Iterative");
console.log("Iterative");
console.log(fibIter(0));
console.log(fibIter(1));
console.log(fibIter(2));
console.log(fibIter(3));
console.log(fibIter(4));
console.log(fibIter(2 * 42));
console.timeEnd("Iterative");

const fibIter2 = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
};

console.time("Iterative 2");
console.log("Iterative 2");
console.log(fibIter2(0));
console.log(fibIter2(1));
console.log(fibIter2(2));
console.log(fibIter2(3));
console.log(fibIter2(4));
console.log(fibIter2(2 * 42));
console.timeEnd("Iterative 2");
