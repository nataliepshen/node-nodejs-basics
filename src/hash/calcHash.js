import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
const { createHash } = await import('crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    let content = await fs.readFile(filePath, 'utf-8');
    let hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

calculateHash();