import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRemove.txt'); 
        let removeResult = await fs.unlink(filePath);
        if (removeResult != undefined) {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.log('FS operation failed');
        console.error(error.message);
    }
};
remove();