function comp(array1, array2){
    if (!array1 || !array2) return false
    let array1Sorted = array1.sort((a,b) => a - b)
    let array2Sorted = array2.sort((a,b) => a - b)
    for (let i =0; i <array1Sorted.length; i++) {
        if(array1Sorted[i]* array1Sorted[i] === array2Sorted[i]){
            continue
        } else {
            return false
        }
    }

    return true

}