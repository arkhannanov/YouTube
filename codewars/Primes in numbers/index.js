function primeFactors(n){
    let factors = [];
    let i = 2;

    while (i <= n) {
        if (n % i === 0) {
            factors.push(i);
            n /= i;
        } else {
            i++;
        }
    }

    let factorsObj = factors.reduce((acc, el) => {
        if(acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})

    return Object.entries(factorsObj).map(el => '(' + el[0] + `${el[1] ==1 ? '' : '**'}` + `${el[1] ==1 ? '' : el[1]}` + ')').join('')

}