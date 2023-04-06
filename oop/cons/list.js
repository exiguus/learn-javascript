"use strict";

const {join} = require("path");
const cons = require(join(__dirname, "./cons"));

function list(...args) {
    const [first, ...rest] = args;

    if (rest.length === 0) {
        return cons(first, null);
    }

    return cons(first, list(...rest));
}

module.exports = list;
