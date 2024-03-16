const getRepeats = (array) => array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0)+1;
    return acc
}, {})