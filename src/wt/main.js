import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
    const workerPath = path.join(__dirname, 'worker.js');
    const cores = cpus();
    const workerArray = [];
    for (let i = 0; i < cores.length; i++) {
        const promiseWorker = new Promise((resolve, reject) => {
            let worker = new Worker(workerPath, {
                workerData: 10 + i,
            })
            worker.on('message', resolve);
            worker.on('error', reject);
        });
        workerArray[i] = promiseWorker;
    }
    let result = await Promise.allSettled(workerArray);
    result.forEach((item) => {
        item['data'] = item['value'];
        delete item['value'];
        if (item.status === 'fulfilled') {
            item.status = 'resolved';
        }
        else if (item.status === 'rejected') {
            item.status = 'error';
            item.data = null;
            delete item.reason;
        }
    })
    console.log(result);
};
performCalculations();