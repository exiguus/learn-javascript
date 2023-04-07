import fs from "fs";
import path from "path";
import {execSync} from "child_process";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePaths = function (dirPath, arrayOfFiles) {
    const files = fs.readdirSync(path.join(__dirname, dirPath));

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(path.join(__dirname, dirPath, file)).isDirectory()) {
            arrayOfFiles = getFilePaths(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, file));
        }
    });

    return arrayOfFiles;
};

async function test() {
    const jsFiles = getFilePaths("../../").filter(
        (file) =>
            !file.includes("node_modules") &&
            (file.endsWith(".js") ||
                (file.endsWith(".mjs") && file !== __filename)),
    );

    jsFiles.map(async (file) => {
        try {
            console.log(`test ${file}...`);
            execSync(`node ${file}`).toString();
            console.log(`test ${file}... OK`);
        } catch (err) {
            console.error(err);
            return process.exit(err.status);
        }
    });
    return process.exit(0);
}

await test();
