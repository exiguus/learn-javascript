"use strict";

const {join} = require("path");

const cons = require(join(__dirname, "./cons.js"));

console.log(join(__dirname, "./cons"));
const cell = cons(23, 43);

console.log(cell);
console.log(cell.car());
console.log(cell.cdr());
console.log(cell.getCreationTime());
