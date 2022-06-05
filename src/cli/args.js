import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const parseArgs = () => {
    let argsArr = process.argv;
    let result = '';
    for (let i = 0; i < argsArr.length; i++) {
        if (argsArr[i].startsWith('--')) {
            result += `${argsArr[i].slice(2)} is ${argsArr[i + 1]}, `;
        }
    }
    console.log(result.slice(0, -2));
};
parseArgs();