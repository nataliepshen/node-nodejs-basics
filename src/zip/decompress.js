import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const filePath = path.join(__dirname, 'files', 'archive.gz');
    const decompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(decompressPath);
    const gunzip = createGunzip();
    pipeline(input, gunzip, output, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Unzipping was successful');
        }
    });
};
decompress();