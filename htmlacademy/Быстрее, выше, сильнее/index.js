if (trainingTime <= 30) {
    levels[indicators.indexOf('скорость')] += 3;
    levels[indicators.indexOf('ловкость')] += 3;
} else if (trainingTime > 30 && trainingTime <= 60) {
    levels[indicators.indexOf('гибкость')] += 3;
} else if (trainingTime > 60) {
    levels[indicators.indexOf('сила')] += 2;
    levels[indicators.indexOf('выносливость')] += 2;
}