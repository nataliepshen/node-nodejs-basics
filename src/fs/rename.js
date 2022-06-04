import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
    try {
        const filePath = path.join(__dirname, 'files/');
        try {
            await fs.access(`${filePath}${'properFilename.md'}`);
                throw new Error('File already exists');
        } catch(error) {
            if (error.code !== 'ENOENT'){
                console.log('FS operation failed');
                console.error(error.message);
                return;
            }
        }
        let stats = await fs.stat(`${filePath}${'wrongFilename.txt'}`);
        if (!stats.isFile()) {
            throw new Error('FS operation failed');
        }
        await fs.rename(`${filePath}${'wrongFilename.txt'}`, `${filePath}${'properFilename.md'}`);
    } catch (error) {
        console.log('FS operation failed');
        console.error(error.message);
    }
};
rename();