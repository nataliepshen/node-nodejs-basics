import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    let masterPath = path.join(__dirname, 'files', 'script.js');
    const chilpProcess = fork(masterPath, process.argv.slice(2));
};
spawnChildProcess();