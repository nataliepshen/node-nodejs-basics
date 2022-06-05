import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    let readableStream = fs.createReadStream(filePath, 'utf-8');
    let data = '';
    readableStream.on('data', chunk => data += chunk);
    readableStream.on('end', () => stdout.write(data));
    readableStream.on('error', error => console.log('Error', error.message));
};
read();