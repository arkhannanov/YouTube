function sumTwoSmallestNumbers(numbers) {
    // Сначала создадим копию массива и отсортируем его
    let sortedNumbers = [...numbers].sort((a, b) => a - b);

    // firstMin будет первым элементом отсортированного массива
    const firstMin = sortedNumbers[0];

    // Второй наименьший элемент следует непосредственно за первым.
    // Мы начинаем поиск со второго элемента, потому что исключаем первый (наименьший) элемент.
    const secondMin = sortedNumbers[1];

    // Возвращаем сумму двух наименьших чисел
    return firstMin + secondMin;
}