import fs from "fs";
import path from "path";
import {execSync} from "child_process";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePaths = function (dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getFilePaths(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
        }
    });

    return arrayOfFiles;
};

async function test() {
    const javascriptFiles = getFilePaths(path.join(__dirname, "../")).filter(
        (file) => !file.includes("node_modules") && file.endsWith(".js"),
    );

    javascriptFiles.map(async (file) => {
        try {
            const stdout = execSync(
                `node ./${file.split("/js/").at(-1)}`,
            ).toString();
            console.log(stdout);
        } catch (err) {
            if (err.status > 0) {
                console.error(err);
                return process.exit(err.status);
            }
        }
    });
    return process.exit(0);
}

await test();
