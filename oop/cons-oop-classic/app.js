'use strict'

const { join } = require('path')
const Cons = require(join(__dirname, './Cons.js'))

const cell = new Cons(23, 43)

console.log(cell)
console.log(cell.car())
console.log(cell.cdr())
console.log(cell.getCreationTime())

console.log(Object.hasOwn(cell, 'car'))
console.log(Object.hasOwn(cell, 'cdr'))
console.log(Object.hasOwn(cell, 'getCreationTime'))
console.log(Object.hasOwn(cell, 'toString'))

console.log(cell.constructor)
console.log(cell.__proto__)
console.log(cell.__proto__.hasOwnProperty('car'))
console.log(cell.__proto__.hasOwnProperty('cdr'))
console.log(cell.__proto__.hasOwnProperty('getCreationTime'))
console.log(cell.__proto__.hasOwnProperty('toString'))
console.log(cell.__proto__.constructor)

console.log(cell.toString())

console.log(cell.getCounter())