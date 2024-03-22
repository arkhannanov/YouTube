if (itsRaining) {
    minutes = 0
} else if (temperature < 0 || temperature > 35) {
    minutes = 0;
} else if (temperature === 20) {
    minutes = 20;
} else if (Math.abs(20 - temperature) > 0){
    minutes = Math.abs(20 - Math.abs(20 - temperature))
}