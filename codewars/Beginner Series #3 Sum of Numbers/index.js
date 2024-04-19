function getSum(a, b) {
    // Если числа равны, возвращаем одно из них, так как их сумма равна самому числу
    if (a === b) return a;

    // Стартуем цикл от меньшего числа к большему
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;

    // Суммируем все числа от start до end включительно
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // Возвращаем полученную сумму
    return sum;
}