function solution(str){
    let arrayOfSymbols = str.split('')
    let result = []
    let string = ''
    for(let i=0; i < arrayOfSymbols.length; i++ ) {
        if( i % 2 === 0 ) {
            string +=arrayOfSymbols[i]
        } else if (i % 2 !== 0) {
            string +=arrayOfSymbols[i]
            result.push(string)
            string = ''
        }
    }
    if(string !== '') {
        string += '_'
        result.push(string)
    }
    return result
}