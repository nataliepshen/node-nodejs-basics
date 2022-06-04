export const parseEnv = () => {
    let variables = process.env;
    let varMap = new Map(Object.entries(variables));
    let arr = [];
    for (let entry of varMap) {
        if (entry[0].startsWith('RSS_')) {
            arr.push(entry);
        }
    }
    let result = '';
    for (let item of arr) {
        result += `${item[0]}=${item[1]}; `;
    }
    console.log(result.slice(0, -2));
};
parseEnv();