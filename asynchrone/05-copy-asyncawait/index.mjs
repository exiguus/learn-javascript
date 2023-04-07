"use strict";
import {join, dirname} from "path";
import {readFile, writeFile} from "fs/promises";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
    console.time("read");
    console.log("Reading file 'textfile.txt'...");
    const data = await readFile(join(__dirname, "./textfile.txt"), "utf8");
    console.log("Read textfile.txt", data);
    console.timeEnd("read");
} catch (err) {
    console.log(err);
}

try {
    console.time("write");
    console.log("Writing file 'textfile2.txt'...");
    const data = await writeFile(
        join(__dirname, "./textfile2.txt"),
        "Hello World!",
        "utf8",
    );
    console.log("Wrote textfile2.txt", data);
    console.timeEnd("write");
} catch (err) {
    console.log(err);
}

const copy = async function (source, target) {
    try {
        const data = await readFile(join(__dirname, source), "utf8");
        await writeFile(join(__dirname, target), data, "utf8");
        return data;
    } catch (err) {
        throw err;
    }
};

try {
    console.time("copy");
    console.log("Copying file 'textfile.txt' to 'textfile2.txt'...");
    const data = await copy("textfile.txt", "textfile2.txt");
    console.log("Copied", data);
    console.timeEnd("copy");
} catch (err) {
    console.log(err);
}
