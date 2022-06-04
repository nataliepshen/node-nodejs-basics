import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    try {
        const filePath = path.join(__dirname, 'files/');
        let stats = await fs.stat(filePath);
        if (!stats.isDirectory()) {
            throw new Error('FS operation failed');
        }
        let files = await fs.readdir(filePath);
        console.log(files);
    } catch(error) {
        console.log('FS operation failed');
        console.error(error.message);
    }
};
list();