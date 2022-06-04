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