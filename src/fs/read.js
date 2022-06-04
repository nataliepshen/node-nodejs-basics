import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
        let stats = await fs.stat(filePath);
        if (!stats.isFile()) {
            throw new Error('FS operation failed');
        }
        let readResult = await fs.readFile(filePath, 'utf-8');
        console.log(readResult);
    } catch(error) {
        console.log('FS operation failed');
        console.error(error.message);
    }
};
read();