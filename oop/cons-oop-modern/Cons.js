"use strict";

class Cons {
    static counter = 0;

    constructor(car, cdr) {
        this.timestamp = Date.now();
        this.carValue = car;
        this.cdrValue = cdr;
        this.counterValue = this.getCounter;

        Cons.counter += 1;
    }

    getCounter() {
        return Cons.counter;
    }

    getCreationTime() {
        return this.timestamp;
    }

    toString() {
        return `(${this.carValue}, ${this.cdrValue})`;
    }

    car() {
        return this.carValue;
    }

    cdr() {
        return this.cdrValue;
    }

    print() {
        const self = this;
        console.log(`print: (${this.car()}, ${this.cdr()})`);
        setTimeout(function () {
            try {
                console.log(
                    `print "this" SetTimeout: (${this.car()}, ${this.cdr()})`,
                );
            } catch (err) {
                console.log(err);
                console.log(
                    `print "self" SetTimeout: (${self.car()}, ${self.cdr()})`,
                );
            }
        }, 3_000);
    }
}

module.exports = Cons;
