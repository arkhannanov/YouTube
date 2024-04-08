let getProfitableDeposit = function(startDeposit, time, percent, precentCapitalization) {
    let сontribution = Math.floor(startDeposit + ((percent / 100) / 12) * time * startDeposit);

    let contributionCapitaliztion = startDeposit;
    for(let i = 0; i < time; i++) {
        contributionCapitaliztion = contributionCapitaliztion + ((precentCapitalization / 100) / 12) * contributionCapitaliztion;
    };
    contributionCapitaliztion = Math.floor(contributionCapitaliztion);

    if(сontribution > contributionCapitaliztion) {
        return 'Выбирай обычный вклад. Получишь ' + сontribution;
    } else {
        return 'Выбирай капитализацию. Получишь ' + contributionCapitaliztion;
    };
};