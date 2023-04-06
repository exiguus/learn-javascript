"use strict";

// const Cons = function (car, cdr) {
//     this.timestamp = Date.now()
//     this.getCreationTime = () => this.timestamp
//     this.car = () => car
//     this.cdr = () => cdr
//     this.toString = () => `(${car}, ${cdr})`
// }

const Cons = function (car, cdr) {
    this.timestamp = Date.now();
    this.carValue = car;
    this.cdrValue = cdr;
    this.counterValue = this.getCounter;

    Cons.counter += 1;
};

Cons.counter = 0;

Cons.prototype.getCounter = function () {
    return Cons.counter;
};

Cons.prototype.getCreationTime = function () {
    return this.timestamp;
};

Cons.prototype.toString = function () {
    return `(${this.carValue}, ${this.cdrValue})`;
};

Cons.prototype.car = function () {
    return this.carValue;
};

Cons.prototype.cdr = function () {
    return this.cdrValue;
};

module.exports = Cons;
