function getUsersIds(str){
    const arrayOfStrings = str.split(',')
    const getValue = (string) => string.replace('uid','').trim().toLowerCase().replace(/#/g, "")
    return arrayOfStrings.map(el => getValue(el))
}