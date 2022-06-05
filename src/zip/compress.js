import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');
    const input = fs.createReadStream(filePath, 'utf-8');
    const output = fs.createWriteStream(archivePath);
    const gzip = createGzip();
    pipeline(input, gzip, output, (err) => {
        if (err) {
            console.error(error);
        }
    });
};
compress();