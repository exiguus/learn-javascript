"use strict";
class Logger {
    static instance;

    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(message);
    }

    logCount() {
        return this.logs.length;
    }

    logList() {
        return this.logs;
    }
}

const logger = new Logger();
Object.freeze(logger); // Prevents accidental modification

logger.log("First log message");
logger.log("Second log message");

console.log(logger.logCount());
console.log(logger.logList());

const logger2 = new Logger();
logger2.log("Third log message");
logger2.log("Fourth log message");

console.log(logger2.logCount());
console.log(logger2.logList());

console.log(logger === logger2); // true, they are the same instance

module.exports = Logger;
