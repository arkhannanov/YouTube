const getYears = (startYear, endYear, sumOfNumbers) => {
    const result = [];

    for (let i = startYear; i <= endYear; i++) {
        if (String(i).split('').reduce((acc, value) => acc + parseInt(value), 0) === sumOfNumbers) {
            result.push(i);
        }
    }

    return result;
};