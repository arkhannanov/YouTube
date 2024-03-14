const getDocumentsNumbers = (datesArray, year) => {

    let number = 0;

    for (let i =0; i < datesArray.length; i++) {
        let currentYear = datesArray[i].split('').splice(4,4).join('')
        if(currentYear == year) number++
    }

    return number
}