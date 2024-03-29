for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}