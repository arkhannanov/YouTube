function squareSum(numbers){
    return numbers.reduce((acc, el) => acc + el*el, 0)
}