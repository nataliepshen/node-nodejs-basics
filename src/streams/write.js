import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    let writableStream = fs.createWriteStream(filePath);
    stdin.on('data', data => writableStream.write(data));
    stdin.on('error', error => console.log('Error', error.message));
};
write();