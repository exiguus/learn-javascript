import fs from "fs";
import path from "path";
import {execSync} from "child_process";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePaths = (dirPath, arrayOfFiles = []) => {
    const fullPath = path.join(__dirname, dirPath);

    if (!fs.existsSync(fullPath)) {
        console.error(`Directory not found: ${fullPath}`);
        return arrayOfFiles;
    }

    const files = fs.readdirSync(fullPath);

    files.forEach((file) => {
        const filePath = path.join(fullPath, file);
        if (fs.existsSync(filePath)) {
            if (fs.statSync(filePath).isDirectory()) {
                arrayOfFiles = getFilePaths(
                    path.join(dirPath, file),
                    arrayOfFiles,
                );
            } else {
                arrayOfFiles.push(filePath);
            }
        }
    });

    return arrayOfFiles;
};

async function test() {
    const jsFiles = getFilePaths("../../").filter(
        (file) =>
            !file.includes("node_modules") &&
            !file.includes("spec.js") &&
            !file.includes(".test.js") &&
            (file.endsWith(".js") ||
                (file.endsWith(".mjs") && file !== __filename)),
    );

    try {
        await Promise.all(
            jsFiles.map(async (file) => {
                console.log(`Testing ${file}...`);
                execSync(`node ${file}`, {stdio: "inherit"});
                console.log(`Testing ${file}... OK`);
            }),
        );
        process.exit(0);
    } catch (err) {
        console.error(`Test failed: ${err.message}`);
        process.exit(err.status || 1);
    }
}

await test();
