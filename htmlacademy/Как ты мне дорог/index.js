const calculateExpenses = (netSalary) => {

    const salary = Math.round(100 * netSalary / (100 - incomeTax))

    const expenses = salary + Math.round(salary / 100 * contributions)

    return expenses
}