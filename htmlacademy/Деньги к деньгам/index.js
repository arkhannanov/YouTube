function calculateDeposit(initialAmount, annualInterestRate, depositTermMonths, isCompound) {
    let deposit = initialAmount;

    if (isCompound) {
        for (let i = 0; i < depositTermMonths; i++) {
            let monthlyInterest = (annualInterestRate / 12) / 100;
            deposit += deposit * monthlyInterest;
        }
    } else {
        let monthlyInterest = (annualInterestRate / 12) / 100;
        deposit += initialAmount * monthlyInterest * depositTermMonths;
    }

    return Math.floor(deposit);
}