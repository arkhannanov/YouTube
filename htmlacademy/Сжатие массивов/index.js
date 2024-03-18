const getZippedArrays = (keysArray, valuesArray) => {

    const result = {}
    for (let i=0; i < valuesArray.length; i++) { result[keysArray[i]] = valuesArray[i]
    }

    return result
}