import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { constants } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
    try {
        const filePath = path.join(__dirname, 'files/');
        const newPath = path.join(__dirname, 'files_copy/');
        let stats = await fs.stat(filePath);
        if (!stats.isDirectory()) {
            throw new Error('FS operation failed');
        }
        let copyFolder = await fs.mkdir(newPath);
        if (copyFolder != undefined) {
            throw new Error('FS operation failed');
        }
        let files = await fs.readdir(filePath);
        for (let file of files) {
            await fs.copyFile(`${filePath}/${file}`, `${newPath}/${file}`, constants.COPYFILE_EXCL);
        }
    } catch (error) {
        console.log('FS operation failed');
        console.error(error.message);
    }
};
copy();