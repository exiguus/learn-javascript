"use strict";

const {join} = require("path");
const {readFile, writeFile} = require("fs");

const readInput = function (filename) {
    return new Promise((resolve, reject) =>
        readFile(join(__dirname, `./${filename}`), "utf8", (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        }),
    );
};

const writeOutput = function (filename, data) {
    return new Promise((resolve, reject) =>
        writeFile(join(__dirname, `./${filename}`), data, "utf8", (err) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        }),
    );
};

console.time("read");
console.log("Reading file 'textfile.txt'...");
readInput("textfile.txt")
    .then((data) => {
        console.log("Read textfile.txt", data);
        console.timeEnd("read");
    })
    .catch((err) => {
        console.log(err);
    });

console.time("write");
console.log("Writing file 'textfile2.txt'...");
writeOutput("textfile2.txt", "Hello World!")
    .then((data) => {
        console.log("Wrote textfile2.txt", data);
        console.timeEnd("write");
    })
    .catch((err) => {
        console.log(err);
    });

const copy = function (source, target) {
    return new Promise((resolve, reject) => {
        readInput(source)
            .then((data) => {
                return writeOutput(target, data);
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

console.time("copy");
console.log("Copying file 'textfile.txt' to 'textfile2.txt'...");
copy("textfile.txt", "textfile2.txt")
    .then((data) => {
        console.log("Copied", data);
        console.timeEnd("copy");
    })
    .catch((err) => {
        console.log(err);
    });
