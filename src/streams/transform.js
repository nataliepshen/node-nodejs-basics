import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const transformText =  new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split(' ').map(item => item.split('').reverse().join('')).reverse().join(' '));
        },
    });
    pipeline(process.stdin, transformText, process.stdout, (err) => {
        if (err) {
            console.log(error);
        }
    });
};
transform();