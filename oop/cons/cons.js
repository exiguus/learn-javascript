'use strict'

function cons(car, cdr) {
    const timestamp = Date.now()
    const getCreationTime = () => timestamp
    const carFn = () => car
    const cdrFn = () => cdr
    const toString = () => `(${car}, ${cdr})`

    return {
        getCreationTime,
        car: carFn,
        cdr: cdrFn,
        toString,
    }
}

module.exports = cons