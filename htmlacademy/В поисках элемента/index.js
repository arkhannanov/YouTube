let lastIndex = -1;

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === number) {
        lastIndex = i;
        break;
    }
}