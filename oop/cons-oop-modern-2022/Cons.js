'use strict'

class Cons {
    static counter = 0;

    #timestamp
    #carValue
    #cdrValue

    constructor(car, cdr) {
        this.#timestamp = Date.now()
        this.#carValue = car
        this.#cdrValue = cdr
        this.counterValue = this.getCounter

        Cons.counter += 1
    }

    getCounter() {
        return Cons.counter
    }

    getCreationTime() {
        return this.#timestamp
    }

    toString() {
        return `(${this.#carValue}, ${this.#cdrValue})`
    }

    car() {
        return this.#carValue
    }

    cdr() {
        return this.#cdrValue
    }
}

module.exports = Cons