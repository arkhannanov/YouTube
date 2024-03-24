let total = 0
for (let i = period; i <= days; i +=period) {
    if (i%7 === 6 || i%7 === 0) {
        total +=weekendAmount;
    } else {
        total +=workDayAmount;
    }
}