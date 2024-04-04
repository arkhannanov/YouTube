const getDayOfWeek = (weekDay, number) => {
    const weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

    for (let i = 0; i < 7; i++) {
        if (weekDay === weekDays[i]) {
            return weekDays[(i + number - 1) % 7];
        }
    }
}