let time = 12; // Пример времени, можно изменить для тестирования

let goToDairy = false;
let goToStore = false;
let goToMarket = false;

if ((time >= 8 && time < 13) || (time >= 14 && time < 19)) {
    goToDairy = true;
} else if ((time >= 9 && time < 14) || (time >= 15 && time < 17)) {
    goToStore = true;
} else if (time >= 7 && time < 20) {
    goToMarket = true;
}

console.log('goToDairy:', goToDairy);
console.log('goToStore:', goToStore);
console.log('goToMarket:', goToMarket);