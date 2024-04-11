function getData(keys, values) {
    const result = [];

    for (let i = 0; i < values.length; i++) {
        const obj = {};

        for (let j = 0; j < keys.length && j < values[i].length; j++) {
            obj[keys[j]] = values[i][j];
        }

        result.push(obj);
    }

    return result;
}