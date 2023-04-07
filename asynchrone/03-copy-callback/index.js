"use strict";

const {join} = require("path");
const {readFile, writeFile} = require("fs");

const readInput = function (filename, callback) {
    // try catch block will not work here, because readFile is asynchronous
    // try {
    readFile(join(__dirname, `./${filename}`), "utf8", (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(data);
        }
    });
    // } catch (err) {
    //     console.log(err)
    // }
};

const writeOutput = function (filename, data, callback) {
    writeFile(join(__dirname, `./${filename}`), data, "utf8", (err) => {
        if (err) {
            return callback(err);
        } else {
            return callback(data);
        }
    });
};

try {
    console.time("read");
    console.log("Reading file 'textfile.txt'...");
    readInput("textfile.txt", (data) => {
        if (data instanceof Error) {
            throw new Error("Error in readFile function");
        } else {
            console.log("Read textfile.txt", data);
            console.timeEnd("read");
        }
    });

    console.time("write");
    console.log("Writing file 'textfile2.txt'...");
    writeOutput("textfile2.txt", "Hello World!", (data) => {
        if (data instanceof Error) {
            throw new Error("Error in writeFile function");
        } else {
            console.log("Wrote textfile2.txt", data);
            console.timeEnd("write");
        }
    });
} catch (err) {
    console.log(err);
}

const copy = function (source, target, callback) {
    readInput(source, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            writeOutput(target, data, (data) => {
                callback(data);
            });
        }
    });
};

try {
    console.time("copy");
    console.log("Copying file 'textfile.txt' to 'textfile2.txt'...");
    copy("textfile.txt", "textfile2.txt", (data) => {
        if (data instanceof Error) {
            throw new Error("Error in copy function");
        } else {
            console.log("Copied", data);
            console.timeEnd("copy");
        }
    });
} catch (err) {
    console.log(err);
}
